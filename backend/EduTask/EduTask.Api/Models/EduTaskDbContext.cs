using Microsoft.EntityFrameworkCore;

namespace EduTask.Api.Models
{
    public class EduTaskDbContext : DbContext
    {
        public EduTaskDbContext(DbContextOptions<EduTaskDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
    }
}
