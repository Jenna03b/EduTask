import { Component, OnInit, ViewChild } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrl: './consultations.component.css',
  providers: [DialogService, MessageService]

})
export class ConsultationsComponent implements OnInit {
  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  displayDialog: boolean = false;
  isEditMode: boolean = false;
  
  // data = [
  //   { subject: 'Chemistry', topic: 'Periodic Table Basics', date: '2024-11-28' },
  // { subject: 'English', topic: 'Essay Writing', date: '2024-12-07' },
  // { subject: 'History', topic: 'Ancient Egypt', date: '2024-12-12' },
  // { subject: 'Art', topic: 'Impressionist Paintings', date: '2024-12-01' },
  // { subject: 'Physical Education', topic: 'Basketball Rules', date: '2024-11-29' }
  // ];

  newActivity: Partial<Activity> = {
    type: 'Consultation',
    subject: '',
    topic: '',
    notes: '',
    progress: 'ToDo',
    date: ''
  };

  constructor(private activityService: ActivityService, private messageService: MessageService) {}


  ngOnInit() {
    this.loadActivities();
  }

  loadActivities() {
    this.activityService.getActivities().subscribe(data => {
      this.activities = data.filter(activity => activity.type === 'Consultation');
    });
  }

  openDialog(activity?: Partial<Activity>) {
    this.isEditMode = false;
    this.newActivity = activity
      ? { ...activity, id: activity.id || 0, date: this.formatDateForInput(activity.date || '') }
      : { type: 'Consultation', progress: 'ToDo', subject: '', topic: '', date: '', id: 0 };
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
    this.newActivity = { type: 'Consultation', progress: 'ToDo', subject: '', topic: '', date: '' };
    this.displayDialog = true;
  }

  onEdit(): void {
    this.isEditMode = true;
  }

  saveActivity() {
    if (!this.newActivity.type || !this.newActivity.subject || !this.newActivity.topic || !this.newActivity.date || !this.newActivity.progress) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' });
      return;
    }
  
    const activityPayload = {
      type: this.newActivity.type,
      subject: this.newActivity.subject,
      topic: this.newActivity.topic,
      notes: this.newActivity.notes || '',
      progress: this.newActivity.progress,
      date: new Date(this.newActivity.date).toISOString()
    };
  
    this.activityService.createActivity(activityPayload).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Created', detail: 'Activity created successfully' });
        this.loadActivities();
        this.displayDialog = false;
      },
      (error) => {
        console.error('Error creating activity:', error);
      }
    );
  }
  
  deleteActivity(activityId: number) {
    this.activityService.deleteActivity(activityId).subscribe(() => {
      this.messageService.add({ severity: 'warn', summary: 'Deleted', detail: 'Activity deleted successfully' });
      this.loadActivities();
    });
  }
}
