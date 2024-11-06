import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
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
    });
  }
  public expense: any = {
    amount: null,
    createDate: null,
    description: null,
    category: null,
    paymentMethod: null,
    recurringOption: 'MONTHLY',
    currency: 'RS',
  };

  selectedFile: File | null = null;
  byteArray: Uint8Array | null = null;

  public options: any = [];

  loadCategory() {
    this.http
      .get('http://localhost:8080/category/get-all')
      .subscribe((data) => {
        this.options = data;
      });
  }

  paymentMethods = [
    { label: 'Credit Card', value: 'CREDIT_CARD' },
    { label: 'Debit Card', value: 'DEBIT_CARD' },
    { label: 'Bank Transfer', value: 'BANK_TRANSFER' },
    { label: 'Cash', value: 'CASH' },
  ];

  selectedPaymentMethod = this.paymentMethods[0].value;

  onPaymentMethodChange() {
    console.log('Selected payment method:', this.selectedPaymentMethod);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.selectedFile = input.files[0];
      this.convertFileToByteArray(this.selectedFile);
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
