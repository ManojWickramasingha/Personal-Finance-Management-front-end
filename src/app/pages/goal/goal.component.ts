import { Component } from '@angular/core';
import { GoalFromComponent } from '../../components/goal-from/goal-from.component';
import { IncomeGoalFormComponent } from '../../components/income-goal-form/income-goal-form.component';

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [GoalFromComponent, IncomeGoalFormComponent],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css',
})
export class GoalComponent {}
