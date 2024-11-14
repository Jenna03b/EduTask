import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeworkComponent } from './homework/homework.component';
import { ExamsComponent } from './exams/exams.component';
import { ConsultationsComponent } from './consultations/consultations.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'homework',
    component: HomeworkComponent,
  },
  {
    path: 'exams',
    component: ExamsComponent,
  },
  {
    path: 'consultations',
    component: ConsultationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
