import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { noFutureDateValidator } from './noFutureDateValidator';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goal-from',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './goal-from.component.html',
  styleUrl: './goal-from.component.css',
})
export class GoalFromComponent implements OnInit {
  goalForm: FormGroup;
  lastGoal: any = {};
  public goalObj: any = {
    total: '',
    goal: '',
    createDate: '',
    goalType: '',
  };

  constructor(private http: HttpClient) {
    this.goalForm = new FormGroup({
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

  laodTotal() {
    this.http
      .get('http://localhost:8080/goal/last_record')
      .subscribe((data) => {
        this.lastGoal = data;
        this.goalObj.total = this.lastGoal.total;
      });
  }

  addGoal() {
    this.http
      .post('http://localhost:8080/goal/expense', this.goalObj)
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
}
