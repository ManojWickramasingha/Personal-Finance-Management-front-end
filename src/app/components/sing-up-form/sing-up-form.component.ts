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
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sing-up-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './sing-up-form.component.html',
  styleUrl: './sing-up-form.component.css',
})
export class SingUpFormComponent {
  singUpForm: FormGroup;

  constructor(private http: HttpClient) {
    this.singUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(
          '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=]).*$'
        ),
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(
          '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=]).*$'
        ),
      ]),
    });
  }

  get email() {
    return this.singUpForm.get('email');
  }

  get name() {
    return this.singUpForm.get('name');
  }

  get password() {
    return this.singUpForm.get('password');
  }

  get rePassword() {
    return this.singUpForm.get('rePassword');
  }

  onSubmit() {
    if (this.singUpForm.valid) {
      const formData = this.singUpForm.value;
      console.log(formData);
      this.http
        .post('http://localhost:8080/user/registration', formData)
        .subscribe(
          (res) => {
            console.log(res);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            console.log(error);
            Swal.fire({
              title: 'Error!',
              text: 'Do you want to continue',
              icon: 'error',
              confirmButtonText: 'Cool',
            });
          }
        );
    }
  }
}
