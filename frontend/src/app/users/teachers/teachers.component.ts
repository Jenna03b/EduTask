import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Table, TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css',
  standalone: true,
  imports: [FormsModule, TreeTableModule, TableModule, ButtonModule, DialogModule, InputTextModule],
})
export class TeachersComponent {
  @ViewChild('table') table!: Table;
  displayDialog: boolean = false;
  
  data = [
      { email: 'jane.doe@example.com', firstName: 'Jane', lastName: 'Doe', phoneNumber: '123-456-7890', roles: 'Teacher' },
      { email: 'bob.jones@example.com', firstName: 'Bob', lastName: 'Jones', phoneNumber: '555-765-4321', roles: 'Teacher' },
      { email: 'david.lee@example.com', firstName: 'David', lastName: 'Lee', phoneNumber: '234-567-8901', roles: 'Teacher' },
      { email: 'chris.moore@example.com', firstName: 'Chris', lastName: 'Moore', phoneNumber: '678-901-2345', roles: 'Teacher' }
  ];

  newTeacher = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    roles: 'Teacher'
  };

  onShow() {
    this.newTeacher = {  email: '', firstName: '', lastName: '', phoneNumber: '', roles: 'Teacher' }; 
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }

  saveTask() {
    if (this.newTeacher.email && this.newTeacher.firstName && this.newTeacher.lastName && this.newTeacher.phoneNumber) {
      this.data.push({ ...this.newTeacher });
      this.hideDialog();
    } else {
      alert('Please fill out all fields.');
    }
  }
}
