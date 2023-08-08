
namespace Bigbang3API.Models
{
    public class Booking
    {
        public int BookingId { get; set; }
        public string? BookedBy { get; set; }=string.Empty;
        public string? ContactEmail { get; set; }=string.Empty;
        public string? ContactNumber { get; set; }
        public string? Destination { get; set; } 

        public string? NumberOfPeople { get; set; }
        public string? PackageName { get; set; }
        public DateTime StartOfJourney { get; set; }
        public DateTime EndOfJourney { get; set; }

        


    }
}
