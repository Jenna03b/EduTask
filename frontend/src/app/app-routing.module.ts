import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { SettingsComponent } from './settings/settings.component';
import { StudentsComponent } from './users/students/students.component';
import { TeachersComponent } from './users/teachers/teachers.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: 'activity',
        loadChildren: () => import('./activity/activity.module').then((m) => m.ActivityModule),
      },
      { path: 'users/students', component: StudentsComponent },
      { path: 'users/teachers', component: TeachersComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
