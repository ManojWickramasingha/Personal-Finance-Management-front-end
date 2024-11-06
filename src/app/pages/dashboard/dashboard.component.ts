import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
