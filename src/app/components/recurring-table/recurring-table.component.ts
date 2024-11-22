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
  selector: 'app-recurring-table',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './recurring-table.component.html',
  styleUrl: './recurring-table.component.css',
})
export class RecurringTableComponent implements OnInit {
  recurrForm: FormGroup;
  public selectRecurr: any = {};
  public isDisabled: boolean = true;

  constructor(private http: HttpClient) {
    this.recurrForm = new FormGroup({
      id: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      optionType: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(Daily|Weekly|Monthly)$/),
      ]),
    });
  }

  ngOnInit(): void {
    this.loadTable();
    this.recurrForm.controls['id'].disable();
  }
  public records: any = [];

  loadTable() {
    this.http.get('http://localhost:8080/recurre/get-all').subscribe((data) => {
      this.records = data;
    });
  }
  selectedRecurr(recurr: any) {
    this.selectRecurr = recurr;
  }

  updateRecurr() {
    this.http
      .put('http://localhost:8080/recurre/update', this.selectRecurr)
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

  openModal(recurrData: any) {
    this.selectRecurr = recurrData;
    this.recurrForm.patchValue({
      id: recurrData.id,
      startDate: recurrData.startDate,
      endDate: recurrData.endDate,
    });
  }

  closeModal() {
    this.recurrForm.reset();
  }

  deleteRecurr(id: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleting...',
          html: 'Please wait while we delete your item.',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        // Make the DELETE API call
        this.http
          .delete(`http://localhost:8080/recurre/delete/${id}`)
          .subscribe(
            () => {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your item has been successfully deleted.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
              });
              this.loadTable();
            },
            (error) => {
              console.error('Error deleting item:', error);
              Swal.fire({
                title: 'Error!',
                text: 'There was an error deleting your item. Please try again.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
              });
            }
          );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'Your item is safe.',
          icon: 'info',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  }
}
