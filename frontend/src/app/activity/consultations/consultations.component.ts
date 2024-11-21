import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrl: './consultations.component.css'
})
export class ConsultationsComponent {
  @ViewChild('table') table!: Table;
  
  data = [
    { subject: 'Chemistry', topic: 'Periodic Table Basics', date: '2024-11-28' },
  { subject: 'English', topic: 'Essay Writing', date: '2024-12-07' },
  { subject: 'History', topic: 'Ancient Egypt', date: '2024-12-12' },
  { subject: 'Art', topic: 'Impressionist Paintings', date: '2024-12-01' },
  { subject: 'Physical Education', topic: 'Basketball Rules', date: '2024-11-29' }
  ];
}
