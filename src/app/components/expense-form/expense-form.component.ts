import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  expenseForm: FormGroup;

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
        Validators.pattern(/^[1-9]\d*(\.\d+)?$/),
      ]),
      createDate: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      category: new FormControl('', Validators.required),
      paymentMethods: new FormControl('', Validators.required),
      receipt: new FormControl(''),
    });
  }

  url = 'assets/img/receipt.jpg';
  public expense: any = {
    amount: 0.0,
    createDate: '',
    description: '',
    category: '',
    paymentMethod: '',
    recurringOption: 'MONTHLY',
    currency: 'RS',
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

  onFileSelected(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  convertFileToByteArray(file: File): void {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        this.byteArray = new Uint8Array(reader.result);
        this.receipt.receiptImage = Array.from(this.byteArray);
      }
    };
    reader.onerror = (error) => console.error('File reading error:', error);
  }
  public receipt: any = {
    receiptImage: this.byteArray,
  };

  addExpensWithReceipt() {
    const payload = {
      expense: this.expense,
      receipt: this.receipt,
    };

    this.http.post('http://localhost:8080/expense', payload).subscribe(
      (res) => {
        console.log('Upload successful', res);
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }
}
