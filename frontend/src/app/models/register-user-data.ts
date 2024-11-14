export interface RegisterUserData {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    role: 'Student' | 'Teacher';
  }