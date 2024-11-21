import { Component } from "@angular/core";
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { AuthService } from "../../services/auth.service";
import { DropdownModule } from 'primeng/dropdown';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule, ButtonModule, DropdownModule]
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
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        password: ['', [Validators.required, Validators.minLength(2)]],
        phoneNumber: [''],
      });
    }

    onSubmit(): void {
      if (this.formGroup.valid) {
        const userData = {
          email: this.formGroup.get('email')?.value,
          firstName: this.formGroup.get('firstName')?.value,
          lastName: this.formGroup.get('lastName')?.value,
          password: this.formGroup.get('password')?.value
        };
        console.log('Registering user:', userData);
        this.authService.register(userData).subscribe(
          response => {
            console.log('Registration successful:', response);
            alert('Registration successful!');
            this.router.navigate(['/login']);
          },
          error => {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
          }
        );
      }
    }

    onBack() {
      this.router.navigate(['/login']);
    }
  }