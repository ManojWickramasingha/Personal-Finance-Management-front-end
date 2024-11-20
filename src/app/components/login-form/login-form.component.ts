import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../pages/login/authService';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  public login: any = {
    username: '',
    password: '',
  };

  onLogin() {
    const loginData = {
      email: this.login.username,
      password: this.login.password,
    };

    console.log(loginData);

    this.http
      .post('http://localhost:8080/user/login', loginData)
      .subscribe((res: any) => {
        console.log(res);
        if (res.message == 'Email not exits') {
          Swal.fire({
            title: 'Error!',
            text: 'Email not exits',
            icon: 'error',
            confirmButtonText: 'Cool',
          });
        } else if (res.message == 'Login Success') {
          localStorage.setItem('isLoggedIn', 'true');
          this.authService.setLoginStatus(true);
          this.router.navigate(['/dashboard']);
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Incorrect Email and Password not matched',
            icon: 'error',
            confirmButtonText: 'Cool',
          });
        }
      });
  }
}
