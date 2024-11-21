import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('table') table!: Table;

  data = [
    { type: 'Lecture', subject: 'Math', topic: 'Algebra Basics', date: '2024-11-01' },
    { type: 'Homework', subject: 'Science', topic: 'Physics Experiments', date: '2024-11-05' },
    { type: 'Test', subject: 'English', topic: 'Grammar Quiz', date: '2024-11-10' },
    { type: 'Lecture', subject: 'History', topic: 'World War II', date: '2024-11-15' },
    { type: 'Homework', subject: 'Math', topic: 'Trigonometry', date: '2024-11-20' }
  ];
}
