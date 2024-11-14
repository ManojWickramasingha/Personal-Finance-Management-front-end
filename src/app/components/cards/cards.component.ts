import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent implements OnInit {
  public expenseTotal: any = 0.0;
  public incomeTotal: any = 0.0;
  public Total: any = 0.0;
  public Balance: any = 0.0;

  ngOnInit(): void {
    this.getExpenseTotal();
    this.getIncomeTotal();
    this.getTotal();
    this.getBalance();
  }

  constructor(private http: HttpClient) {}

  getExpenseTotal() {
    this.http
      .get('http://localhost:8080/analysis/expense/total')
      .subscribe((data) => {
        this.expenseTotal = data;
      });
  }
  getIncomeTotal() {
    this.http
      .get('http://localhost:8080/analysis/income/total')
      .subscribe((data) => {
        this.incomeTotal = data;
      });
  }

  getTotal() {
    this.http.get('http://localhost:8080/analysis/total').subscribe((data) => {
      this.Total = data;
    });
  }
  getBalance() {
    this.http
      .get('http://localhost:8080/analysis/balance')
      .subscribe((data) => {
        this.Balance = data;
      });
  }
}
