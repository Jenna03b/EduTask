import { Component, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Activity } from '../../models/activity.model';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [DialogService, MessageService]
})
export class HomeComponent {
  activities: Activity[] = [];
  selectedActivity: Activity | null = null;
  displayDialog: boolean = false;
  isEditMode: boolean = false;

  // data = [
  //   { type: 'Lecture', subject: 'Math', topic: 'Algebra Basics', date: '2024-11-01' },
  //   { type: 'Homework', subject: 'Science', topic: 'Physics Experiments', date: '2024-11-05' },
  //   { type: 'Test', subject: 'English', topic: 'Grammar Quiz', date: '2024-11-10' },
  //   { type: 'Lecture', subject: 'History', topic: 'World War II', date: '2024-11-15' },
  //   { type: 'Homework', subject: 'Math', topic: 'Trigonometry', date: '2024-11-20' }
  // ];

  newActivity: Partial<Activity> = {
    type: 'Homework',
    subject: '',
    topic: '',
    notes: '',
    progress: 'ToDo',
    date: ''
  };

  progressOptions = [
    { label: 'To Do', value: 'ToDo' },
    { label: 'In Progress', value: 'InProgress' },
    { label: 'Done', value: 'Done' }
  ];

  constructor(private activityService: ActivityService, private messageService: MessageService) {}

  ngOnInit() {
    this.loadActivities();
  }

  loadActivities() {
    this.activityService.getActivities().subscribe(data => {
      this.activities = data.filter(activity => activity.type);
    });
  }

  deleteActivity(activityId: number) {
    this.activityService.deleteActivity(activityId).subscribe(() => {
      this.messageService.add({ severity: 'warn', summary: 'Deleted', detail: 'Activity deleted successfully' });
      this.loadActivities();
    });
  }
}
