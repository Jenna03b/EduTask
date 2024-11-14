import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HomeworkComponent } from './homework/homework.component';
import { ExamsComponent } from './exams/exams.component';
import { ConsultationsComponent } from './consultations/consultations.component';
import { ActivityRoutingModule } from './activity-routing.module';
import { ButtonModule } from 'primeng/button';

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
    ButtonModule
  ],
  exports: [],
})
export class ActivityModule {}
