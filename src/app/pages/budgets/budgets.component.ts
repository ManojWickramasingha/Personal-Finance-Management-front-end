import { Component } from '@angular/core';
import { ExpenseCardComponent } from '../../components/expense-card/expense-card.component';
import { IncomeCardComponent } from '../../components/income-card/income-card.component';

@Component({
  selector: 'app-budgets',
  standalone: true,
  imports: [ExpenseCardComponent, IncomeCardComponent],
  templateUrl: './budgets.component.html',
  styleUrl: './budgets.component.css',
})
export class BudgetsComponent {}
