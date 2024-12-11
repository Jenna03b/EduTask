using Microsoft.EntityFrameworkCore;

namespace EduTask.Api.Models
{
    public class EduTaskDbContext : DbContext
    {
        public EduTaskDbContext(DbContextOptions<EduTaskDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Activity> Activities { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(u => u.Activities)
                .WithOne(a => a.User)
                .HasForeignKey(a => a.UserId);

            base.OnModelCreating(modelBuilder);
        }
    }
}
