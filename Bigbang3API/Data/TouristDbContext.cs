
using Bigbang3API.Models;
using Microsoft.EntityFrameworkCore;
namespace Bigbang3API.Data
{
    public class TouristDbContext:DbContext
    {
        public TouristDbContext(DbContextOptions options) : base(options) { 
        
        }
        public DbSet<User> Users { get; set; }
        
    }
}
