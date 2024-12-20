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
  selector: 'app-income-card',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './income-card.component.html',
  styleUrl: './income-card.component.css',
})
export class IncomeCardComponent implements OnInit {
  public total: any;
  public incomeTotal: any;
  public incomeGoal: any;
  public incomeForm: FormGroup;
  public isDisabled = true;
  constructor(private http: HttpClient) {
    this.incomeForm = new FormGroup({
      total: new FormControl('', Validators.required),
      goal: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  public goalIncome: any = {
    total: '',
    goal: '',
    createDate: '',
    updateDate: '',
  };
  ngOnInit(): void {
    this.incomeForm.controls['total'].disable();
    this.getLastIncomGoal();
    this.getTotal();
  }

  get incomeProgress(): number {
    if (!this.incomeTotal || !this.incomeGoal || this.incomeGoal === 0) {
      return 0;
    }
    const progress = (this.incomeTotal / this.incomeGoal) * 100;
    return Math.round(Math.min(progress, 100));
  }

  getTotal() {
    this.http
      .get('http://localhost:8080/analysis/income/total')
      .subscribe((data) => {
        this.incomeTotal = data;
        this.total = data;
      });
  }

  getLastIncomGoal() {
    this.http.get('http://localhost:8080/goal/lastIncome').subscribe((data) => {
      this.goalIncome = data;
      this.incomeGoal = this.goalIncome.goal;
      this.incomeProgress;
    });
  }

  updateIncomeGoal() {
    this.http
      .post('http://localhost:8080/goal/income', this.goalIncome)
      .subscribe(
        (res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getLastIncomGoal();
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
