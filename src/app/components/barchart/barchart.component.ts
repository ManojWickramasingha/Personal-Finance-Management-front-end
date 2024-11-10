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
  constructor() {}

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart() {
    const myChart = new Chart('barchart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Expense',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(178, 38, 238)',
            tension: 0.1,
          },
          {
            label: 'Income',
            data: [50, 45, 30, 48, 90, 10, 20],
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
}
