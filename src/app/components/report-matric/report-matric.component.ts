import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-matric',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './report-matric.component.html',
  styleUrl: './report-matric.component.css',
})
export class ReportMatricComponent implements OnInit {
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
      .get('http://localhost:8080/analysis/expense/monthly/total')
      .subscribe((data) => {
        this.totalExpense = data;
      });
  }

  TotalIncome() {
    this.http
      .get('http://localhost:8080/analysis/income/monthly/total')
      .subscribe((data) => {
        this.totalIncome = data;
      });
  }

  TotalProfit() {
    this.http
      .get('http://localhost:8080/analysis/monthly/netProfit')
      .subscribe((data) => {
        this.totalProfit = data;
      });
  }
}
