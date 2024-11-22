import { Component } from '@angular/core';
import { ReportHeaderComponent } from '../report-header/report-header.component';
import { ReportMatricComponent } from '../report-matric/report-matric.component';
import { LineChartMonthlyComponent } from '../line-chart-monthly/line-chart-monthly.component';
import { ReportInsigntComponent } from '../report-insignt/report-insignt.component';
import { ReportDataTableComponent } from '../report-data-table/report-data-table.component';
import { PiechartMonthlyComponent } from '../piechart-monthly/piechart-monthly.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-com-report',
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
  templateUrl: './com-report.component.html',
  styleUrl: './com-report.component.css',
})
export class ComReportComponent {}
