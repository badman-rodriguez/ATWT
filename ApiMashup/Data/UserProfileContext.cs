using FoodAndMovieMashup.Models;
using Microsoft.EntityFrameworkCore;

namespace FoodAndMovieMashup.Data
{
    public class UserProfileContext : DbContext
    {
        public UserProfileContext(DbContextOptions<UserProfileContext> options) : base(options) {}
        public DbSet<User> Users { get; set; }
        public DbSet<SavedHistory> SavedHistories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<SavedHistory>().ToTable("SavedHistory");
        }
    }
}
