import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { noFutureDateValidator } from '../goal-from/noFutureDateValidator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-income-goal-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './income-goal-form.component.html',
  styleUrl: './income-goal-form.component.css',
})
export class IncomeGoalFormComponent implements OnInit {
  incomeForm: FormGroup;
  lastGoal: any = {};
  public incomGoal = {
    total: '',
    goal: '',
    createDate: '',
    goalType: '',
  };

  constructor(private http: HttpClient) {
    this.incomeForm = new FormGroup({
      total: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9]\\d*(\\.\\d+)?$'),
      ]),
      goal: new FormControl('', [
        Validators.required,
        Validators.pattern('^[1-9]\\d*(\\.\\d+)?$'),
      ]),
      createDate: new FormControl('', [
        Validators.required,
        noFutureDateValidator(),
      ]),
      goalType: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    this.laodTotal();
  }

  addGoal() {
    this.http
      .post('http://localhost:8080/goal/income', this.incomGoal)
      .subscribe(
        (res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool',
          });
        }
      );
  }

  laodTotal() {
    this.http.get('http://localhost:8080/goal/lastIncome').subscribe((data) => {
      this.lastGoal = data;
      this.incomGoal.total = this.lastGoal.total;
    });
  }
}
