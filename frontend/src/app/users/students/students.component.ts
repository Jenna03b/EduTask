import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
  standalone: true,
  imports: [FormsModule, TreeTableModule, TableModule, ButtonModule, DialogModule, InputTextModule],
})
export class StudentsComponent {
  @ViewChild('table') table!: Table;
  displayDialog: boolean = false;
  
  data = [
    { email: 'john.smith@example.com', firstName: 'John', lastName: 'Smith', phoneNumber: '987-654-3210', roles: 'Student' },
    { email: 'alice.wilson@example.com', firstName: 'Alice', lastName: 'Wilson', phoneNumber: '555-123-4567', roles: 'Student' },
    { email: 'linda.brown@example.com', firstName: 'Linda', lastName: 'Brown', phoneNumber: '456-789-0123', roles: 'Student' },
    { email: 'susan.clark@example.com', firstName: 'Susan', lastName: 'Clark', phoneNumber: '321-654-0987', roles: 'Student' },
    { email: 'emma.green@example.com', firstName: 'Emma', lastName: 'Green', phoneNumber: '567-890-1234', roles: 'Student' },
  ];

  newStudent = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    roles: 'Student'
  };

  onShow() {
    this.newStudent = { email: '', firstName: '', lastName: '', phoneNumber: '', roles: 'Student' }; 
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }

  saveTask() {
    if (this.newStudent.email && this.newStudent.firstName && this.newStudent.lastName && this.newStudent.phoneNumber) {
      this.data.push({ ...this.newStudent });
      this.hideDialog();
    } else {
      alert('Please fill out all fields.');
    }
  }
}
