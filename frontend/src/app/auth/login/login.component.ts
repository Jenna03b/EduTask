import { Component } from "@angular/core";
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule, ButtonModule]
  })
  export class LoginComponent{
    value!: string;
    formGroup: FormGroup | undefined;

    constructor(
    private router: Router
    ) {}

    ngOnInit() {
        this.formGroup = new FormGroup({
          email: new FormControl<string | null>(null)
        });
    }

    onSubmit(): void {}

    onRegister() {
      this.router.navigate(['/register']);
    }
  }