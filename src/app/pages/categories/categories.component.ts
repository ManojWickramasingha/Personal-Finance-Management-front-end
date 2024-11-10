import { Component } from '@angular/core';
import { CategoryTableComponent } from '../../components/category-table/category-table.component';
import { CategoryFormComponent } from '../../components/category-form/category-form.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryTableComponent, CategoryFormComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {}
