import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent {
  @ViewChild('table') table!: Table;
  displayDialog: boolean = false;

  data = [
    { subject: 'Math', topic: 'Algebra Basics', progress: 'To Do', date: '2024-12-01' },
    { subject: 'Science', topic: 'Physics Experiments', progress: 'In Progress', date: '2024-11-25' },
    { subject: 'English', topic: 'Grammar Quiz', progress: 'Done', date: '2024-11-10' },
    { subject: 'History', topic: 'World War II', progress: 'Done', date: '2024-11-15' },
    { subject: 'Math', topic: 'Trigonometry', progress: 'To Do', date: '2024-11-25' },
  ];

  newTask = {
    subject: '',
    topic: '',
    progress: 'To Do',
    date: ''
  };

  onShow() {
    this.newTask = { subject: '', topic: '', progress: 'To Do', date: '' }; // Reset form
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }

  saveTask() {
    if (this.newTask.subject && this.newTask.topic && this.newTask.date) {
      this.data.push({ ...this.newTask });
      this.hideDialog();
    } else {
      alert('Please fill out all fields.');
    }
  }
}
