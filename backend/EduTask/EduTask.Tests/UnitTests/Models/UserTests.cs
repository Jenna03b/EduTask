//using EduTask.Api.Models;
//using System;
//using System.Collections.Generic;
//using System.Data;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace EduTask.Tests.UnitTests.Models
//{
//    public class UserTests
//    {
//        [Fact]
//        public void Shoud_create_new_user_When_data_is_valid()
//        {
//            // arrange 
//            var email = "john.smith@gmail.com";
//            var firstName = "John";
//            var lastName = "Smith";
//            var password = "passJohn";
//            var phoneNumber = "123456789";
//            //var role = UserRole.Student;

//            // act
//            var user = new User(email, firstName, lastName, phoneNumber, password);
//            //user.SetRole(role);

//            // assert
//            Assert.NotNull(user);
//            Assert.Equal(email, user.Email);
//            Assert.Equal(firstName, user.FirstName);
//            Assert.Equal(lastName, user.LastName);
//            Assert.Equal(phoneNumber, user.PhoneNumber);
//            Assert.Equal(password, user.Password);
//            //Assert.Equal(role, user.Roles);
//        }

//        [Fact]
//        public void Shoud_throw_exception_When_email_is_invalid()
//        {
//            // arrange
//            var email = "invalid-email.com";
//            var firstName = "John";
//            var lastName = "Smith";
//            var phoneNumber = "123456789";
//            var password = "passJohn";
//            //var role = UserRole.Student;

//            // act & assert
//            var ex = Assert.Throws<ArgumentException>(() => new User(email, firstName, lastName, phoneNumber, password));
//            Assert.Equal("Invalid email", ex.Message);
//        }

//        [Fact]
//        public void Shoud_throw_exception_When_email_is_null()
//        {
//            // arrange
//            string email = null;
//            var firstName = "John";
//            var lastName = "Smith";
//            var phoneNumber = "123456789";
//            var password = "passJohn";
//            //var role = UserRole.Student;

//            // act & assert
//            var ex = Assert.Throws<ArgumentException>(() => new User(email, firstName, lastName, phoneNumber, password));
//            Assert.Equal("Email cannot be empty", ex.Message);
//        }

//        [Fact]
//        public void Shoud_set_user_email_When_data_is_valid()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn");
//            var newEmail = "adam.smith@gmail.com";

//            // act
//            user.SetEmail(newEmail);

//            // assert
//            Assert.Equal(newEmail, user.Email);
//        }

//        [Fact]
//        public void Shoud_throw_exception_When_setting_invalid_email()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn");

//            // act & assert
//            var ex = Assert.Throws<ArgumentException>(() => user.SetEmail("invalid-email"));
//            Assert.Equal("Invalid email", ex.Message);
//        }

//        [Fact]
//        public void Shoud_return_true_When_password_is_valid()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn");

//            // act
//            var result = user.IsPasswordValid("passJohn");

//            // assert
//            Assert.True(result);
//        }

//        [Fact]
//        public void Shoud_return_false_When_password_is_invalid()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn");

//            // act
//            var result = user.IsPasswordValid("wrongPassword");

//            // assert
//            Assert.False(result);
//        }

//        [Fact]
//        public void Shoud_throw_exception_When_password_is_null()
//        {
//            // arrange
//            var email = "john.smith@gmail.com";
//            var firstName = "John";
//            var lastName = "Smith";
//            string password = null;
//            //var role = UserRole.Student;

//            // act & assert
//            var ex = Assert.Throws<ArgumentException>(() => new User(email, firstName, lastName, "123456789", password));
//            Assert.Equal("Password cannot be empty", ex.Message);
//        }

//        [Fact]
//        public void Shoud_set_user_name_When_data_is_valid()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn");
//            var newName = "Adam";

//            // act
//            user.SetFirstName(newName);

//            // assert
//            Assert.Equal(newName, user.FirstName);
//        }

//        [Fact]
//        public void Shoud_throw_exception_When_setting_empty_first_name()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn");

//            // act & assert
//            var ex = Assert.Throws<ArgumentException>(() => user.SetFirstName(""));
//            Assert.Equal("Name cannot be empty", ex.Message);
//        }

//        [Fact]
//        public void Shoud_set_user_last_name_When_data_is_valid()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn");
//            var newLastName = "Krawczyk";

//            // act
//            user.SetLastName(newLastName);

//            // assert
//            Assert.Equal(newLastName, user.LastName);
//        }

//        [Fact]
//        public void Shoud_throw_exception_When_setting_empty_last_name()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn");

//            // act & assert
//            var ex = Assert.Throws<ArgumentException>(() => user.SetLastName(""));
//            Assert.Equal("Last name cannot be empty", ex.Message);
//        }

//        [Fact]
//        public void Shoud_set_user_phone_number_When_data_is_valid()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn"t);
//            var newPhoneNumber = "987654321";

//            // act
//            user.SetPhoneNumber(newPhoneNumber);

//            // assert
//            Assert.Equal(newPhoneNumber, user.PhoneNumber);
//        }

//        [Fact]
//        public void Shoud_throw_exception_When_phone_number_is_too_short()
//        {
//            // arrange
//            var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn");

//            // act & assert
//            var ex = Assert.Throws<ArgumentException>(() => user.SetPhoneNumber("123"));
//            Assert.Equal("Phone number min lenght 9", ex.Message);
//        }

//        //[Fact]
//        //public void Shoud_set_user_role_When_data_is_valid()
//        //{
//        //    // arrange
//        //    var user = new User("john.smith@gmail.com", "John", "Smith", "123456789", "passJohn", UserRole.Student);

//        //    // act
//        //    user.SetRole(UserRole.Teacher);

//        //    // assert
//        //    Assert.Equal(UserRole.Teacher, user.Roles);
//        //}
//    }
//}
