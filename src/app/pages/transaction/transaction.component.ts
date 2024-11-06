import { Component } from '@angular/core';
import { ExpenseFormComponent } from '../../components/expense-form/expense-form.component';
import { IncomeFormComponent } from '../../components/income-form/income-form.component';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [ExpenseFormComponent, IncomeFormComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css',
})
export class TransactionComponent {}
