import { Component } from '@angular/core';
import { ReportHeaderComponent } from '../../components/report-header/report-header.component';
import { ReportMatricComponent } from '../../components/report-matric/report-matric.component';

import { ReportInsigntComponent } from '../../components/report-insignt/report-insignt.component';
import { ReportDataTableComponent } from '../../components/report-data-table/report-data-table.component';

import { HttpClientModule } from '@angular/common/http';
import { LineChartMonthlyComponent } from '../../components/line-chart-monthly/line-chart-monthly.component';
import { PiechartMonthlyComponent } from '../../components/piechart-monthly/piechart-monthly.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    ReportHeaderComponent,
    ReportMatricComponent,
    LineChartMonthlyComponent,
    ReportInsigntComponent,
    ReportDataTableComponent,
    PiechartMonthlyComponent,
    HttpClientModule,
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
})
export class ReportComponent {}
