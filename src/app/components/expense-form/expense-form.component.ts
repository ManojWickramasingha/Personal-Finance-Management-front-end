import { CommonModule, NgFor } from '@angular/common';
import Swal from 'sweetalert2';

import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  selectedFile: File | null = null;
  expenseForm: FormGroup;
  public receiptId: any = '';

  paymentMethods = [
    { label: 'Credit Card', value: 'CREDIT_CARD' },
    { label: 'Cash', value: 'CASH' },
    { label: 'Bank Transfer', value: 'BANK_TRANSFER' },
  ];

  constructor(private http: HttpClient) {
    this.loadCategory();
    this.expenseForm = new FormGroup({
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^Rs\.\s?[1-9]\d*(\.\d{1,2})?$/),
      ]),
      createDate: new FormControl(null, Validators.required),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
      category: new FormControl('', Validators.required),
      paymentMethods: new FormControl('', Validators.required),
      receipt: new FormControl(''),
    });
  }

  public expense: any = {
    amount: '',
    createDate: '',
    description: '',
    category: '',
    paymentMethod: '',
    receipt: 3,
  };

  byteArray: Uint8Array | null = null;

  public options: any = [];

  loadCategory() {
    this.http
      .get('http://localhost:8080/category/get-all')
      .subscribe((data) => {
        this.options = data;
      });
  }

  message: string = '';

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('image', file);
      this.http
        .post('http://localhost:8080/image/fileSystem', formData)
        .subscribe((res: any) => {
          alert('sucessfull Upload');
        });
      this.loadReceiptId();
    }
  }

  loadReceiptId() {
    this.http
      .get('http://localhost:8080/expense/receipt_id')
      .subscribe((res) => {
        this.receiptId = res;
      });
  }

  addExpensWithReceipt() {
    console.log(this.expense);
    this.http.post('http://localhost:8080/expense', this.expense).subscribe(
      (data) => {
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
          text: error.message || 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'Retry',
        });
      }
    );
    this.clearInput();
  }
  clearInput() {
    this.expense.amount = '';
    this.expense.createDate = '';
    this.expense.description = '';
    this.expense.category = '';
    this.expense.paymentMethod = '';
    this.expense.receipt = '';
  }
}
