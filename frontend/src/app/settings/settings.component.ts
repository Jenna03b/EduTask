import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  profileForm: FormGroup;
  isEditing: boolean = false;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      email: [{ value: 'bujallajennifer@gmail.com', disabled: true }, [Validators.required, Validators.email]],
      firstName: [{ value: 'Jennifer', disabled: true }, Validators.required],
      lastName: [{ value: 'Bujalla', disabled: true }, Validators.required],
      phoneNumber: [{ value: '', disabled: true }, Validators.required],
    });
  }

   onEdit(): void {
    this.isEditing = true;
    this.profileForm.enable();
  }

  onSave(): void {
    this.isEditing = false;
    this.profileForm.disable();
    console.log('Saved data:', this.profileForm.value);
  }

  onCancel(): void {
    this.isEditing = false;
    this.profileForm.reset({
      email: { value: 'jennifer.bujalla@intechnify.com', disabled: true },
      firstName: 'Jennifer',
      lastName: 'Bujalla',
      phoneNumber: '',
    });
    this.profileForm.disable();
  }

  deleteAccount() {
    console.log('Konto zostało usunięte');
  }

  changePassword() {
    console.log('Zmiana hasła');
  }
}
