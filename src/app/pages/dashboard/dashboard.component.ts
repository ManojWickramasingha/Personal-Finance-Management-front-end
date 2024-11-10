import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { HttpClient } from '@angular/common/http';
import { BarchartComponent } from '../../components/barchart/barchart.component';
import { PiechartComponent } from '../../components/piechart/piechart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardsComponent, BarchartComponent, PiechartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
