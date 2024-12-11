import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeworksComponent } from './homeworks/homeworks.component';
import { ExamsComponent } from './exams/exams.component';
import { ConsultationsComponent } from './consultations/consultations.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'homeworks',
    component: HomeworksComponent,
  },
  {
    path: 'exams',
    component: ExamsComponent,
  },
  {
    path: 'consultations',
    component: ConsultationsComponent,
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityRoutingModule {}
