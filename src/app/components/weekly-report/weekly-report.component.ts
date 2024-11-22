import { Component } from '@angular/core';
import { ReportInsigntComponent } from '../report-insignt/report-insignt.component';
import { WeeklyMatricComponent } from '../weekly-matric/weekly-matric.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeeklyHeaderComponent } from '../weekly-header/weekly-header.component';
import { BarchartComponent } from '../barchart/barchart.component';
import { PiechartComponent } from '../piechart/piechart.component';

@Component({
  selector: 'app-weekly-report',
  standalone: true,
  imports: [
    ReportInsigntComponent,
    WeeklyMatricComponent,
    HttpClientModule,
    WeeklyHeaderComponent,
    BarchartComponent,
    PiechartComponent,
  ],
  templateUrl: './weekly-report.component.html',
  styleUrl: './weekly-report.component.css',
})
export class WeeklyReportComponent {}
