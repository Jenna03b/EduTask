import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrl: './homework.component.css'
})
export class HomeworkComponent {
  @ViewChild('table') table!: Table;
  
  data = [
    { subject: 'Math', topic: 'Algebra Basics', progress: 'To Do', date: '2024-12-01' },
    { subject: 'Science', topic: 'Physics Experiments', progress: 'In Progress', date: '2024-11-25' },
    { subject: 'English', topic: 'Grammar Quiz', progress: 'Done', date: '2024-11-10' },
    { subject: 'History', topic: 'World War II', progress: 'Done', date: '2024-11-15' },
    { subject: 'Math', topic: 'Trigonometry', progress: 'To Do', date: '2024-11-25' },
  ];

  // clearFilter() {
  //   this.table.clear();
  // }

  // onGlobalFilter(event: Event) {
  //   const inputElement = event.target as HTMLInputElement; // Rzutowanie na HTMLInputElement
  //   const value = inputElement.value || ''; // Pobieranie wartości z inputa
  //   this.table.filterGlobal(value, 'contains'); // Wywołanie funkcji filtrowania
  // }
  
}
