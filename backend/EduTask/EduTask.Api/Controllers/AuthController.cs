using Microsoft.AspNetCore.Mvc;
using EduTask.Api.Models.DTOs;
using EduTask.Api.Services;
using System.Threading.Tasks;
using EduTask.Api.Models.DTOs;

namespace EduTask.Api.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto dto)
        {
            // Bez przypisywania do zmiennej, po prostu wywołanie metody asynchronicznej
            await _authService.RegisterUser(dto);
            return Ok("User registered successfully");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserDto dto)
        {
            var user = await _authService.LoginUser(dto);
            return Ok(new { token = "jwt-token-placeholder", user.FullName });
        }
    }
}
