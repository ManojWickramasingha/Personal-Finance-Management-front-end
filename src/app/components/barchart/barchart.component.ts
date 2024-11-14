import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css',
})
export class BarchartComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeeklySummary();
  }

  RenderChart(expenses: number[], incomes: number[]) {
    const myChart = new Chart('barchart', {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
        'http://localhost:8080/analysis/weekly-summary'
      )
      .subscribe((data) => {
        console.log(data.expenses);
        this.RenderChart(data.expenses, data.incomes);
      });
  }
}
