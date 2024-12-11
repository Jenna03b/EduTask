using EduTask.Api.Models;
using EduTask.Api.Models.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EduTask.Api.Services
{
    public class ActivityService
    {
        private readonly EduTaskDbContext _context;

        public ActivityService(EduTaskDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ActivityDto>> GetActivities(int userId)
        {
            return await _context.Activities
                .Where(a => a.UserId == userId)
                .Select(a => new ActivityDto
                {
                    Id = a.Id,
                    Type = a.Type,
                    Subject = a.Subject,
                    Topic = a.Topic,
                    Notes = a.Notes,
                    Progress = a.Progress,
                    Date = a.Date
                })
                .ToListAsync();
        }

        public async Task CreateActivity(CreateActivityDto dto, int userId)
        {
            var activity = new Activity(dto.Type, dto.Subject, dto.Topic, dto.Notes, dto.Progress, dto.Date, userId);
            _context.Activities.Add(activity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateActivity(int activityId, UpdateActivityDto dto)
        {
            var activity = await _context.Activities.FindAsync(activityId);
            if (activity == null) throw new KeyNotFoundException("Activity not found");

            activity.SetType(dto.Type);
            activity.SetSubject(dto.Subject);
            activity.SetTopic(dto.Topic);
            activity.SetNotes(dto.Notes);
            activity.SetProgress(dto.Progress);
            activity.SetDate(dto.Date);

            await _context.SaveChangesAsync();
        }

        public async Task DeleteActivity(int activityId)
        {
            var activity = await _context.Activities.FindAsync(activityId);
            if (activity == null) throw new KeyNotFoundException("Activity not found");

            _context.Activities.Remove(activity);
            await _context.SaveChangesAsync();
        }
    }
}
