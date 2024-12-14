import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HomeworksComponent } from './homeworks/homeworks.component';
import { ExamsComponent } from './exams/exams.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { TreeTableModule } from 'primeng/treetable';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ActivityService } from '../services/activity.service';
import { DialogService } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    HomeComponent,
    HomeworksComponent,
    ExamsComponent,
    ConsultationsComponent,
  ],
  imports: [
    ActivityRoutingModule,
    CommonModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    TreeTableModule,
    TableModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    ConfirmDialogModule,

  ],
  exports: [
  ],
  providers: [ActivityService, DialogService, ConfirmDialog, ConfirmationService ],
})
export class ActivityModule {}
