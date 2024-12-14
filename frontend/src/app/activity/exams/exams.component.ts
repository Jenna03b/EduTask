import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Activity } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css',
  providers: [DialogService, MessageService]
})
export class ExamsComponent {
  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  displayDialog: boolean = false;
  isEditMode: boolean = false;
  validationErrors: { [key: string]: boolean } = {};
  
  // data = [
  //   { subject: 'Geography', topic: 'Mountain Ranges', date: '2024-12-05' },
  //   { subject: 'Computer Science', topic: 'Introduction to Python', date: '2024-12-10' },
  //   { subject: 'Biology', topic: 'Cell Division', date: '2024-12-02' },
  //   { subject: 'Math', topic: 'Calculus - Derivatives', date: '2024-11-30' },
  //   { subject: 'Physics', topic: 'Newton’s Laws of Motion', date: '2024-12-03' },
  // ];

  newActivity: Partial<Activity> = {
    type: 'Exam',
    subject: '',
    topic: '',
    notes: '',
    progress: 'ToDo',
    date: undefined
  };

  progressOptions = [
    { label: 'To Do', value: 'ToDo' },
    { label: 'In Progress', value: 'InProgress' },
    { label: 'Done', value: 'Done' }
  ];

  
  constructor(private activityService: ActivityService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.loadActivities();
  }

  loadActivities() {
    this.activityService.getActivities().subscribe(data => {
      this.activities = data.filter(activity => activity.type === 'Exam');
    });
  }

  openDialog(activity?: Partial<Activity>) {
    this.isEditMode = false;
    this.newActivity = activity
      ? { ...activity, id: activity.id || 0, date: this.formatDateForInput(activity.date || '') }
      : { type: 'Exam', progress: 'ToDo', subject: '', topic: '', date: '', id: 0 };
    this.displayDialog = true;
  }
  
  enableEdit() {
    this.isEditMode = true;
  }
  
  cancelEdit() {
    this.isEditMode = false;
    this.openDialog({ ...this.newActivity });
  }
  
  formatDateForInput(date: string): string {
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const day = String(parsedDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; 
  }
  

  openNewActivityDialog() {
    this.isEditMode = true;
    this.newActivity = { type: 'Exam', progress: 'ToDo', subject: '', topic: '', date: '' };
    this.displayDialog = true;
  }

  isFieldInvalid(field: string): boolean {
    return !!this.validationErrors[field];
  }

  validateFields(): boolean {
    this.validationErrors = {};
    if (!this.newActivity.subject) this.validationErrors['subject'] = true;
    if (!this.newActivity.date) this.validationErrors['date'] = true;
    return Object.keys(this.validationErrors).length === 0;
  }

  saveActivity() {
      if (!this.validateFields()) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All required fields must be filled' });
        return;
      }
    
      const activityPayload: Partial<Activity> = {
        type: this.newActivity.type,
        subject: this.newActivity.subject,
        topic: this.newActivity.topic,
        notes: this.newActivity.notes || '',
        progress: this.newActivity.progress,
        date: this.newActivity.date ? new Date(this.newActivity.date).toISOString() : undefined
      };
    
      this.activityService.createActivity(activityPayload).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Activity created successfully', life: 3000 });
          this.loadActivities();
          this.displayDialog = false;
        },
        (error) => {
          console.error('Error creating activity:', error);
        }
      );
    }

  confirmDeleteActivity(activityId: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this activity?',
      accept: () => {
        this.deleteActivity(activityId);
      }
    });
  }

  deleteActivity(activityId: number) {
    this.activityService.deleteActivity(activityId).subscribe(() => {
      this.messageService.add({ severity: 'warn', summary: 'Deleted', detail: 'Activity deleted successfully' });
      this.loadActivities();
    });
  }
}
