import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../services/authService/auth.service";
import { LoginRequest } from "../models/LoginRequest";
import {first, tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;
  submitted = false;
  protected readonly emailControl: any;
  protected readonly passwordControl: any;
  protected isIncorrect: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@(?:multilaneinc\\.com|htpsal\\.com|hazenlabs\\.com)$')]],
      password: ['', Validators.required],
    });

    this.emailControl = this.form.get('email');
    this.passwordControl = this.form.get('password');

  }

  validateInput(controlName: string, errorType: string) {
    return this.form.controls[controlName].hasError(errorType);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    let loginRequest: LoginRequest = {
      email: this.emailControl.value,
      password: this.passwordControl.value
    }

    this.authService.login(loginRequest)
      .pipe(
        first(),
        tap((value) => {
          this.authService.userSubject.next(value);
          console.log('Login attempt');
        }),
      )
      .subscribe({
        next: (loginResponse) => {
          this.authService.onLoginSuccess(loginResponse);
        },
        error: (value) => {
          // Handle error
          console.error('Login failed', value);
          this.isIncorrect = true;
        }
      });
  }

}
