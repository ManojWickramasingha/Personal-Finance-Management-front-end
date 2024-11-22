import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgIf, RouterLink, NgFor, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(public router: Router) {}

  navbar: any = [
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
      routerLink: '/categories',
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
  ];

  isCollapsed: any = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  isActive(routerLink: string): boolean {
    return this.router.url === routerLink;
  }
}
