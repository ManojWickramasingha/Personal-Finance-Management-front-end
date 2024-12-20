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
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SingUpFormComponent } from './components/sing-up-form/sing-up-form.component';
import { AuthGuard } from './auth.guard';
import { ComReportComponent } from './components/com-report/com-report.component';
import { WeeklyReportComponent } from './components/weekly-report/weekly-report.component';
export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: LoginFormComponent,
      },
      { path: 'register', component: SingUpFormComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'transaction', component: TransactionComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'budget', component: BudgetsComponent },
  {
    path: 'report',
    component: ReportComponent,
    children: [
      { path: '', component: ComReportComponent },
      { path: 'weekly', component: WeeklyReportComponent },
    ],
  },
  { path: 'recurring', component: RecurringExpenseComponent },
  { path: 'goal', component: GoalComponent },
];
