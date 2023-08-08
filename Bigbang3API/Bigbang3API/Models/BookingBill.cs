using System.ComponentModel.DataAnnotations;

namespace Bigbang3API.Models
{
    public class BookingBill
    {
        [Key]
        public int Id { get; set; }
        public Package? PackageDetails { get; set; }
        public Booking? bookingDetails { get; set; } 
    }
}
