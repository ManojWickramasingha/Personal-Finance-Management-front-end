import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { ReportComponent } from './pages/report/report.component';
import { RecurringExpenseComponent } from './pages/recurring-expense/recurring-expense.component';
import { GoalComponent } from './pages/goal/goal.component';
import { TagsComponent } from './pages/tags/tags.component';
import { CalenderComponent } from './pages/calender/calender.component';
import { RemindersComponent } from './pages/reminders/reminders.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoriesComponent },
  { path: 'budget', component: BudgetsComponent },
  { path: 'report', component: ReportComponent },
  { path: 'recurring', component: RecurringExpenseComponent },
  { path: 'goal', component: GoalComponent },
  { path: 'tag', component: TagsComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'reminder', component: RemindersComponent },
];
