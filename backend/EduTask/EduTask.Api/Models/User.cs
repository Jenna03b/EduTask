﻿using System.ComponentModel.DataAnnotations;

namespace EduTask.Api.Models
{
    public enum UserRole
    {
        Student,
        Teacher
    }
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; } = string.Empty;
        public string Password { get; set; }
        public ICollection<Activity> Activities { get; set; }
        public UserRole Role { get; set; }
        public string FullName => $"{FirstName} {LastName}";

        public User(int id, string email, string firstName, string lastName, string phoneNumber, string password)
        {
            SetEmail(email);
            IsEmailValid(email);
            SetPassword(password);
            IsPasswordValid(password);
            SetFirstName(firstName);
            SetLastName(lastName);
            SetPhoneNumber(phoneNumber);
            //SetRole(roles);
        }

        public User()
        {
        }

        public void SetEmail(string email)
        {
            if (string.IsNullOrEmpty(email))
                throw new ArgumentException("Email cannot be empty");
            if (!email.Contains("@"))
                throw new ArgumentException("Invalid email");
            if (email.Length <= 5)
                throw new ArgumentException("Email min lenght 6");

            Email = email;
        }
        public bool IsEmailValid(string email)
        {
            return string.Equals(Email, email);
        }

        public void SetPassword(string password)
        {
            if (string.IsNullOrEmpty(password))
                throw new ArgumentException("Password cannot be empty");
            if (password.Length <= 5)
                throw new ArgumentException("Password min lenght 6");

            Password = password;
        }

        public bool IsPasswordValid(string password)
        {
            return string.Equals(Password, password);
        }

        public void SetFirstName(string firstName)
        {
            if (string.IsNullOrEmpty(firstName))
                throw new ArgumentException("Name cannot be empty");
            if (firstName.Length <= 3)
                throw new ArgumentException("Name min lenght 3");

            FirstName = firstName;
        }

        public void SetLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName))
                throw new ArgumentException("Last name cannot be empty");
            if (lastName.Length <= 3)
                throw new ArgumentException("Last name min lenght 3");

            LastName = lastName;
        }

        public void SetPhoneNumber(string phoneNumber)
        {
            if (phoneNumber.Length < 9)
                throw new ArgumentException("Phone number min lenght 9");

            PhoneNumber = phoneNumber;
        }

        //public void SetRole(UserRole roles)
        //{
        //    Roles = roles;
        //}
    }
}
