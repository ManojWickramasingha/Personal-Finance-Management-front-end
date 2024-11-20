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
  selector: 'app-category-table',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.css',
})
export class CategoryTableComponent implements OnInit {
  categoryForm: FormGroup;
  public selectCategory: any = {};
  public isDisabled: boolean = true;

  constructor(private http: HttpClient) {
    this.categoryForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(Expense|Income)$/),
      ]),
      description: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.loadTable();
    this.categoryForm.controls['id'].disable();
  }
  public records: any = [];

  loadTable() {
    this.http
      .get('http://localhost:8080/category/get-all')
      .subscribe((data) => {
        this.records = data;
      });
  }
  selectedUpdateCategory(category: any) {
    this.selectCategory = category;
  }

  updateCategory() {
    this.http
      .put('http://localhost:8080/category/update', this.selectCategory)
      .subscribe(
        (data) => {
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
