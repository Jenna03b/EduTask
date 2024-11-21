import { Component } from "@angular/core";
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { LoginUserData } from "../../models/login-user-data";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule, ButtonModule]
  })
  export class LoginComponent{
    value!: string;
    formGroup: FormGroup;

    constructor(
    private router: Router, 
    private fb: FormBuilder, 
    private authService: AuthService
    ) {
      this.formGroup = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(2)]]
      });
    }

    editForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    onSubmit(): void {
      if (this.formGroup.valid) {
        const loginData = {
          email: this.formGroup.get('email')?.value,
          password: this.formGroup.get('password')?.value
      };
        this.authService.login(loginData).subscribe(
          response => {
            console.log('Login successful:', response);
            alert('Login successful!');
            this.router.navigate(['/activity/home']);
          },
          error => {
            console.error('Login failed:', error);
            alert('Login failed. Please try again.');
          }
        );
      }
    }

    onRegister() {
      this.router.navigate(['/register']);
    }
  } 