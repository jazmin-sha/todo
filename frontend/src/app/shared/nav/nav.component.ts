import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],  
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  navList = [
    { id: 1, title: 'Add Todo', path: '/add-item' },
    { id: 2, title: 'List Todo', path: '/list-item' },
    { id: 3, title: 'Edit Todo', path: '/edit-item' },
  ];

  constructor(private router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
