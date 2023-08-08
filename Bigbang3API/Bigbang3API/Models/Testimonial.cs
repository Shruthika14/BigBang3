using System.ComponentModel.DataAnnotations;

namespace Bigbang3API.Models
{
    public class Testimonial
    {
        [Key]
        public int TestimonialId { get; set; }
        public string? Name { get; set; }
        public string? Message { get; set; }
        public int Rating { get; set; } 
    }
}
