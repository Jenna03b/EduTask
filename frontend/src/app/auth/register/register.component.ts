import { Component } from "@angular/core";
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from "@angular/router";
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule, ButtonModule]
  })
  export class RegisterComponent{
    value!: string;
    formGroup: FormGroup | undefined;

    constructor(
      private router: Router
      ) 
    {}

    ngOnInit() {
        this.formGroup = new FormGroup({
          email: new FormControl<string | null>(null)
        });
    }

    onBack() {
      this.router.navigate(['/login']);
    }
  }