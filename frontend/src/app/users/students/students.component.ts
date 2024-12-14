import { Component, OnInit, ViewChild } from '@angular/core';
import { User, UserService } from '../../services/users.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
 
})
export class StudentsComponent implements OnInit {
  students: User[] = [];
  displayDialog: boolean = false;
  currentStudent: User = { id: 0, firstName: '', lastName: '', email: '', phoneNumber: '', role: 'Student' };
  isEditMode: boolean = false;
  validationErrors: { [key: string]: boolean } = {};

  constructor(private userService: UserService, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.userService.getUsers('Student').subscribe((data) => {
      this.students = data;
    });
  }

  openDialog(student?: User): void {
    this.isEditMode = false;
    if (student) {
      this.currentStudent = { ...student };
    } else {
      this.currentStudent = { id: 0, firstName: '', lastName: '', email: '', phoneNumber: '', role: 'Student' };
    }
    this.displayDialog = true;
  }

  openNewStudentDialog(): void {
    this.openDialog();
  }

  isFieldInvalid(field: string): boolean {
    return !!this.validationErrors[field];
  }

  validateFields(): boolean {
    this.validationErrors = {};
    if (!this.currentStudent.firstName) this.validationErrors['firstName'] = true;
    if (!this.currentStudent.lastName) this.validationErrors['lastName'] = true;
    if (!this.currentStudent.email) this.validationErrors['email'] = true;
    return Object.keys(this.validationErrors).length === 0;
  }

  saveStudent(): void {
    if (this.currentStudent.id === 0) {
      this.userService.createUser(this.currentStudent).subscribe(() => this.loadStudents());
    } else {
      this.userService.updateUser(this.currentStudent).subscribe(() => this.loadStudents());
    }
    this.displayDialog = false;
  }

  confirmDeleteActivity(id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this activity?',
      accept: () => {
        this.deleteStudent(id);
      }
    });
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.userService.deleteUser(id).subscribe(() => this.loadStudents());
    }
  }

  enableEdit() {
    this.isEditMode = true;
  }

  cancelEdit(): void {
    this.displayDialog = false;
  }
}
