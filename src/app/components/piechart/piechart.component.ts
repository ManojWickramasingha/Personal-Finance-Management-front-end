import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-piechart',
  standalone: true,
  imports: [],
  templateUrl: './piechart.component.html',
  styleUrl: './piechart.component.css',
})
export class PiechartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart() {
    new Chart('piechart', {
      type: 'pie',
      data: {
        labels: ['Travel', 'Salary', 'Current Bill'],
        datasets: [
          {
            label: 'Category',
            data: [300, 50, 100],
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
}
