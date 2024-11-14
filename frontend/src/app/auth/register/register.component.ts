import { Component } from "@angular/core";
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { AuthService } from "../../services/auth.service";
import { RegisterUserData } from "../../models/register-user-data";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule, ButtonModule]
  })
  export class RegisterComponent{
    value!: string;
    formGroup: FormGroup;

    constructor(
      private router: Router, 
      private fb: FormBuilder, 
      private authService: AuthService
      ) 
    {
      this.formGroup = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['Student', Validators.required]
      });
    }

    onSubmit(): void {
      // if (this.formGroup.valid) {
      //   const userData: RegisterUserData = this.formGroup.value;
      //   this.authService.register(userData).subscribe(
      //     response => {
      //       console.log('Registration successful:', response);
      //       alert('Registration successful!');
      //     },
      //     error => {
      //       console.error('Registration failed:', error);
      //       alert('Registration failed. Please try again.');
      //     }
      //   );
      // }
    }

    onBack() {
      this.router.navigate(['/login']);
    }
  }