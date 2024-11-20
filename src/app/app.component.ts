import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from './pages/login/authService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DashboardComponent,
    TransactionComponent,
    RouterLink,
    NgFor,
    NgIf,
    NgClass,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Personal-Finance-Management-front-end';

  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  navbar: any = [
    {
      routerLink: '',
      label: 'Home',
      icon: 'bi me-2 bi-house fs-3',
    },
    {
      routerLink: '/dashboard',
      label: 'Dashboard',
      icon: 'bi me-2 bi-speedometer2 fs-3',
    },
    {
      routerLink: '/transaction',
      label: 'Transaction',
      icon: 'bi me-2 bi-cash-stack fs-3',
    },
    {
      routerLink: '/category',
      label: 'Categories',
      icon: 'bi me-2 bi-tags fs-3',
    },
    {
      routerLink: '/budget',
      label: 'Budgets',
      icon: 'bi me-2 bi-piggy-bank fs-3',
    },
    {
      routerLink: '/report',
      label: 'Reports',
      icon: 'bi me-2 bi-bar-chart-line fs-3',
    },
    {
      routerLink: '/recurring',
      label: 'Recurring Expense',
      icon: 'bi me-2 bi-arrow-repeat fs-3',
    },
    {
      routerLink: '/goal',
      label: 'Goal',
      icon: 'bi me-2 bi-bullseye fs-3',
    },
    {
      routerLink: '/tag',
      label: 'Tags',
      icon: 'bi me-2 bi-tags fs-3',
    },
    {
      routerLink: '/calender',
      label: 'Calender',
      icon: 'bi me-2 bi-calendar fs-3',
    },
    {
      routerLink: '/reminder',
      label: 'Reminder',
      icon: 'bi me-2 bi-alarm fs-3',
    },
    {},
  ];

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
