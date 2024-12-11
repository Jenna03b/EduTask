import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = 'http://localhost:5114/api/Activity';

  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiUrl);
  }

  createActivity(activity: Partial<Activity>): Observable<string> {
    return this.http.post<string>(this.apiUrl, activity);
  }

  updateActivity(id: number, activity: Partial<Activity>): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/${id}`, activity);
  }

  deleteActivity(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`);
  }
}
