import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
  standalone: true,
  imports: [FormsModule, TreeTableModule, TableModule, ButtonModule],
})
export class StudentsComponent {
  @ViewChild('table') table!: Table;
  
  data = [
    { email: 'john.smith@example.com', firstName: 'John', lastName: 'Smith', phoneNumber: '987-654-3210', roles: 'Student' },
    { email: 'alice.wilson@example.com', firstName: 'Alice', lastName: 'Wilson', phoneNumber: '555-123-4567', roles: 'Student' },
    { email: 'linda.brown@example.com', firstName: 'Linda', lastName: 'Brown', phoneNumber: '456-789-0123', roles: 'Student' },
    { email: 'susan.clark@example.com', firstName: 'Susan', lastName: 'Clark', phoneNumber: '321-654-0987', roles: 'Student' },
    { email: 'emma.green@example.com', firstName: 'Emma', lastName: 'Green', phoneNumber: '567-890-1234', roles: 'Student' },
  ];

  onShow() {
  //   this.dialogRef = this.dialogService.open(EmployeeFormModalComponent, {
  //     header: this.translate.instant(
  //       user ? 'masterData.companyWorkforce.editEmployee' : 'masterData.companyWorkforce.addEmployee'
  //     ),
  //     maximizable: true,
  //     dismissableMask: true,
  //     width: '70%',
  //     draggable: true,
  //     resizable: true,
  //     data: user?.id,
  //   });

  //   this.dialogRef.onClose.subscribe(() => {
  //     this.getData();
  //   });
  // }
  }
}
