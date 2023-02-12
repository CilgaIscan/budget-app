import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm = new UntypedFormGroup({
    username: new UntypedFormControl(null, [Validators.required, Validators.minLength(4)]),
    password: new UntypedFormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  constructor(private readonly router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public goHome(): void {
    this.router.navigate(['/']);
  }

  public login(): void {
    if (this.loginForm.dirty) {
        this.authService.login(this.loginForm.value).subscribe((d) => {
          this.goHome();
        });
    }
  }

}
