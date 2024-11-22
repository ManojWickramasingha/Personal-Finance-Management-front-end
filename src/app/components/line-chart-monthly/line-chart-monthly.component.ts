import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line-chart-monthly',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './line-chart-monthly.component.html',
  styleUrl: './line-chart-monthly.component.css',
})
export class LineChartMonthlyComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeeklySummary();
  }

  RenderChart(expenses: number[], incomes: number[]) {
    const myChart = new Chart('barchart', {
      type: 'line',
      data: {
        labels: [
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '19',
          '20',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30',
        ],
        datasets: [
          {
            label: 'Expense',
            data: expenses,
            fill: false,
            borderColor: 'rgb(178, 38, 238)',
            tension: 0.1,
          },
          {
            label: 'Income',
            data: incomes,
            fill: false,
            borderColor: 'rgb(65, 238, 38)',
            tension: 0.1,
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

  getWeeklySummary() {
    return this.http
      .get<{ expenses: number[]; incomes: number[] }>(
        'http://localhost:8080/analysis/monthly-summary'
      )
      .subscribe((data) => {
        console.log(data.expenses);
        this.RenderChart(data.expenses, data.incomes);
      });
  }
}
