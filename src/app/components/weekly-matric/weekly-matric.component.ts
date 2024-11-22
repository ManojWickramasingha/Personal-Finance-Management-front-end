import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-matric',
  standalone: true,
  imports: [],
  templateUrl: './weekly-matric.component.html',
  styleUrl: './weekly-matric.component.css',
})
export class WeeklyMatricComponent implements OnInit {
  public totalExpense: any;
  public totalIncome: any;
  public totalProfit: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.TotalExpense();
    this.TotalIncome();
    this.TotalProfit();
  }

  TotalExpense() {
    this.http
      .get('http://localhost:8080/analysis/weekly/expense/total')
      .subscribe((data) => {
        this.totalExpense = data;
      });
  }

  TotalIncome() {
    this.http
      .get('http://localhost:8080/analysis/weekly/income/total')
      .subscribe((data) => {
        this.totalIncome = data;
      });
  }

  TotalProfit() {
    this.http
      .get('http://localhost:8080/analysis/weekly/profit')
      .subscribe((data) => {
        this.totalProfit = data;
      });
  }
}
