import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {
  @ViewChild('table') table!: Table;
  
  data = [
    { subject: 'Geography', topic: 'Mountain Ranges', date: '2024-12-05' },
    { subject: 'Computer Science', topic: 'Introduction to Python', date: '2024-12-10' },
    { subject: 'Biology', topic: 'Cell Division', date: '2024-12-02' },
    { subject: 'Math', topic: 'Calculus - Derivatives', date: '2024-11-30' },
    { subject: 'Physics', topic: 'Newton’s Laws of Motion', date: '2024-12-03' },
  ];
}
