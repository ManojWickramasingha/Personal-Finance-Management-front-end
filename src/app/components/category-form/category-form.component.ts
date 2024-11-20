import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent {
  categoryForm: FormGroup;

  constructor(private http: HttpClient) {
    this.categoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(Expense|Income)$/),
      ]),
      description: new FormControl('', Validators.required),
      icon: new FormControl('', Validators.required),
    });
  }

  public category: any = {
    name: '',
    type: '',
    description: '',
    icon: '',
  };

  addCategory() {
    this.http.post('http://localhost:8080/category/', this.category).subscribe(
      (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
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
