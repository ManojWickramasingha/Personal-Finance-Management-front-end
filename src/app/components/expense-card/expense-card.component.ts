import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-expense-card',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.css',
})
export class ExpenseCardComponent implements OnInit {
  today = new Date().toISOString().split('T')[0];
  expenseTotal: any = '';
  expenseGoal: FormGroup;
  totalGoal: any = 100000000;

  public goal: any = {
    total: '',
    goal: '',
    createDate: '',
    updateDate: '',
  };
  constructor(private http: HttpClient) {
    this.expenseGoal = new FormGroup({
      total: new FormControl('', Validators.required),
      goal: new FormControl('', Validators.required),
      date: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.getLast();
    this.getTotal();
  }

  get expenseProgress(): number {
    if (!this.expenseTotal || !this.totalGoal || this.totalGoal === 0) {
      return 0;
    }
    const progress = (this.expenseTotal / this.totalGoal) * 100;
    return Math.round(Math.min(progress, 100));
  }

  getTotal() {
    this.http
      .get('http://localhost:8080/analysis/expense/total')
      .subscribe((data) => {
        this.expenseTotal = data;
      });
  }

  addGoal() {
    this.http.post('http://localhost:8080/goal/expense', this.goal).subscribe(
      (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getLast();
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

  getLast() {
    this.http
      .get<any>('http://localhost:8080/goal/last_record')
      .subscribe((data) => {
        console.log(data);
        this.goal = data;
        this.totalGoal = this.goal.goal;
        this.expenseProgress;
      });
  }
}
