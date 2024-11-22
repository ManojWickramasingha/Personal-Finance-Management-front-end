import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ComReportComponent } from '../../components/com-report/com-report.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [ComReportComponent, HttpClientModule, RouterOutlet, RouterLink],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
})
export class ReportComponent {}
