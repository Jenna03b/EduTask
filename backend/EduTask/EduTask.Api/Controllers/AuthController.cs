using EduTask.Api.Models;
using EduTask.Api.Models.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace EduTask.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly EduTaskDbContext _context;

        public AuthController(EduTaskDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterUserDto registerUser)
        {
            if (_context.Users.Any(u => u.Email == registerUser.Email))
                return BadRequest("User with this email already exists.");

            var user = new User
            {
                Email = registerUser.Email,
                FirstName = registerUser.FirstName,
                LastName = registerUser.LastName,
                Password = registerUser.Password,
                PhoneNumber = string.Empty,
            };

            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok("User registered successfully.");
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginUserDto loginUser)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == loginUser.Email && u.Password == loginUser.Password);
            if (user == null)
                return Unauthorized("Invalid credentials.");

            return Ok(new { message = "Login successful", user.FullName });
        }

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, User updatedUser)
        {
            var user = _context.Users.Find(id);
            if (user == null)
                return NotFound("User not found.");

            user.SetEmail(updatedUser.Email);
            user.SetFirstName(updatedUser.FirstName);
            user.SetLastName(updatedUser.LastName);
            user.SetPhoneNumber(updatedUser.PhoneNumber);
            user.SetPassword(updatedUser.Password);
            //user.SetRole(updatedUser.Roles);

            _context.SaveChanges();
            return Ok("User updated successfully.");
        }

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
                return NotFound("User not found.");

            _context.Users.Remove(user);
            _context.SaveChanges();
            return Ok("User deleted successfully.");
        }
    }
}
