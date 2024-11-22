import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-piechart-monthly',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './piechart-monthly.component.html',
  styleUrl: './piechart-monthly.component.css',
})
export class PiechartMonthlyComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCateByAmountTotal();
  }

  RenderChart(categories: string[], amounts: number[]) {
    new Chart('piechart', {
      type: 'pie',
      data: {
        labels: categories,
        datasets: [
          {
            label: 'Expense',
            data: amounts,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  getCateByAmountTotal() {
    this.http
      .get<{ [key: string]: number }>(
        'http://localhost:8080/analysis/monthly/category_bY/total'
      )
      .subscribe((data) => {
        const categories = Object.keys(data);
        const amounts = Object.values(data);

        console.log('Categories:', categories);
        console.log('Amounts:', amounts);
        this.RenderChart(categories, amounts);
      });
  }
}
