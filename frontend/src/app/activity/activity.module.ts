import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HomeworkComponent } from './homework/homework.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent,
    HomeworkComponent,
    ExamsComponent,
    ConsultationsComponent
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
    InputTextModule
  ],
  exports: [
  ],
})
export class ActivityModule {}
