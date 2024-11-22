import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { RecurringTableComponent } from '../recurring-table/recurring-table.component';

@Component({
  selector: 'app-recurrcing-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './recurrcing-form.component.html',
  styleUrl: './recurrcing-form.component.css',
})
export class RecurrcingFormComponent {
  recurrcingForm: FormGroup;
  public recurr: any = {
    startDate: '',
    endDate: '',
    amount: '',
    optionType: '',
    category: 'Recurring',
    description: '',
  };

  constructor(private http: HttpClient) {
    this.recurrcingForm = new FormGroup({
      start_date: new FormControl('', Validators.required),
      end_date: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

  addRecurr() {
    this.http.post('http://localhost:8080/recurre/', this.recurr).subscribe(
      (data) => {
        Swal.fire({
          title: 'Recuusing Expense Added',
          text: 'You clicked the button!',
          icon: 'success',
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Recurrsing Expense Fiald',
          text: 'Something went wrong',
        });
      }
    );
  }
}
