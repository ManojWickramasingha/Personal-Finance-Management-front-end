import { Component } from '@angular/core';
import { RecurrcingFormComponent } from '../../components/recurrcing-form/recurrcing-form.component';
import { RecurringTableComponent } from '../../components/recurring-table/recurring-table.component';

@Component({
  selector: 'app-recurring-expense',
  standalone: true,
  imports: [RecurrcingFormComponent, RecurringTableComponent],
  templateUrl: './recurring-expense.component.html',
  styleUrl: './recurring-expense.component.css',
})
export class RecurringExpenseComponent {}
