import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-income-form',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './income-form.component.html',
  styleUrl: './income-form.component.css',
})
export class IncomeFormComponent {
  incomeForm: FormGroup;

  constructor(private http: HttpClient) {
    this.incomeForm = new FormGroup({
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^Rs\.\s?[1-9]\d*(\.\d{1,2})?$/),
      ]),
      createDate: new FormControl(null, [Validators.required]),
      source: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      discription: new FormControl(null, Validators.required),
      category: new FormControl('', Validators.required),
    });
  }

  public income: any = {
    amount: null,
    createDate: null,
    source: null,
    description: null,
    category: null,
  };
  public options: any = [
    {
      label: 'Salary',
      value: 'salary',
    },
    {
      label: 'Boarding',
      value: 'boarding',
    },
  ];

  addIncome() {
    this.http.post('http://localhost:8080/income', this.income).subscribe(
      (res) => {
        Swal.fire({
          title: 'Success!',
          text: JSON.stringify(Response),
          icon: 'success',
          confirmButtonText: 'OK',
        });
      },
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: error.message || 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'Retry',
        });
      }
    );
  }
}
