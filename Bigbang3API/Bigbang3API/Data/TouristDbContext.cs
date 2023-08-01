
using Bigbang3API.Models;
using Microsoft.EntityFrameworkCore;
namespace Bigbang3API.Data
{
    public class TouristDbContext:DbContext
    {
       
        public TouristDbContext(DbContextOptions options) : base(options) { 
        
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Bigbang3API.Models.Testimonial> Testimonial { get; set; } = default!;
        public virtual DbSet<Imagetbl> Imagetbls { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Package> Packages { get; set; }
    }

}

