import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    passwordRetype: new FormControl(null, [Validators.required, Validators.minLength(8)]),
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
