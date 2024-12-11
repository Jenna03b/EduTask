using EduTask.Api.Models.DTOs;
using EduTask.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace EduTask.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly ActivityService _activityService;

        public ActivityController(ActivityService activityService)
        {
            _activityService = activityService;
        }

        [HttpGet]
        public async Task<IActionResult> GetActivities()
        {
            var userId = 1;
            var activities = await _activityService.GetActivities(userId);
            return Ok(activities);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity([FromBody] CreateActivityDto dto)
        {
            Console.WriteLine($"Received DTO: {System.Text.Json.JsonSerializer.Serialize(dto)}");

            if (!ModelState.IsValid)
            {
                foreach (var error in ModelState)
                {
                    Console.WriteLine($"{error.Key}: {string.Join(", ", error.Value.Errors.Select(e => e.ErrorMessage))}");
                }
                return BadRequest(ModelState);
            }

            await _activityService.CreateActivity(dto, 1); // Tymczasowy userId
            return Ok("Activity created successfully");
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateActivity(int id, [FromBody] UpdateActivityDto dto)
        {
            await _activityService.UpdateActivity(id, dto);
            return Ok("Activity updated successfully");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(int id)
        {
            await _activityService.DeleteActivity(id);
            return Ok("Activity deleted successfully");
        }
    }
}
