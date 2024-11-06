import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ChartModule } from '../../chart/chart.module';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [SidebarComponent, ChartModule],
})
export class ChartComponent {}
