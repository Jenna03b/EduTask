import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUserData } from '../models/register-user-data';
import { LoginUserData } from '../models/login-user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = 'http://localhost:5000/api/auth';

  // constructor(private http: HttpClient) { }

  // register(userData: RegisterUserData): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/register`, userData);
  // }

  // login(userData: LoginUserData): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, userData);
  // }
}
