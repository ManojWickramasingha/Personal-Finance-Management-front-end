import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-income-form',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './income-form.component.html',
  styleUrl: './income-form.component.css',
})
export class IncomeFormComponent {
  incomeForm: FormGroup;

  constructor() {
    this.incomeForm = new FormGroup({
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]\d*(\.\d+)?$/),
      ]),
      createDate: new FormControl(null, [Validators.required]),
      source: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      discription: new FormControl(null),
    });
  }

  public income: any = {
    amount: null,
    createDate: null,
    source: null,
    description: null,
    category: null,
  };
  public options: any = [
    {
      label: 'Salary',
      value: 'salary',
    },
    {
      label: 'Boarding',
      value: 'boarding',
    },
  ];
}
