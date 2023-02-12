import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public registerForm = new UntypedFormGroup({
    email: new UntypedFormControl(null, [Validators.required, Validators.email]),
    username: new UntypedFormControl(null, [Validators.required, Validators.minLength(4)]),
    password: new UntypedFormControl(null, [Validators.required, Validators.minLength(8)]),
    passwordRetype: new UntypedFormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  constructor(private readonly location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public goBack(): void {
    this.location.back();
  }

  public register(): void {
    if (this.registerForm.dirty) {
        this.authService.register(this.registerForm.value).subscribe(() => {
          this.goBack();
        });
    }
  }
}
