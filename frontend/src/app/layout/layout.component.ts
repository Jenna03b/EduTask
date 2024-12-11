import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',

})
export class LayoutComponent {
  menuVisible = false;

  menu = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: ['activity/home'],
    },
    {
      label: 'Homework',
      icon: 'pi pi-briefcase',
      routerLink: ['activity/homeworks'],
    },
    {
      label: 'Exams',
      icon: 'pi pi-pen-to-square',
      routerLink: ['activity/exams'],
    },
    {
      label: 'Consultations',
      icon: 'pi pi-comments',
      routerLink: ['activity/consultations'],
    },
    {
      label: 'Students',
      icon: 'pi pi-users',
      routerLink: ['users/students'],
    },
    {
      label: 'Teachers',
      icon: 'pi pi-users',
      routerLink: ['users/teachers'],
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      routerLink: ['/settings'],
    }
  ]

  constructor(
    private router: Router
    ) {}

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  onLogout(){
    this.router.navigate(['/login']);
  }
}
