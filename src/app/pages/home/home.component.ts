import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
// import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
