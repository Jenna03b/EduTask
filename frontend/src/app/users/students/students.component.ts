import { Component, OnInit, ViewChild } from '@angular/core';
import { User, UserService } from '../../services/users.service';

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

  constructor(private userService: UserService) {}

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

  saveStudent(): void {
    if (this.currentStudent.id === 0) {
      this.userService.createUser(this.currentStudent).subscribe(() => this.loadStudents());
    } else {
      this.userService.updateUser(this.currentStudent).subscribe(() => this.loadStudents());
    }
    this.displayDialog = false;
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
