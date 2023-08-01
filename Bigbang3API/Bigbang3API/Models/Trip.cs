namespace Bigbang3API.Models
{
    public class Trip
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal Price { get; set; }

        // Additional properties for destination details
        public string? Destination { get; set; }
        public int DurationInDays { get; set; }
        public string? RouteDetails { get; set; }

        // Accommodations details
        public string? AccommodationType { get; set; }
        public decimal AccommodationPricePerNight { get; set; }

        // Vehicle arrangements
        public bool IncludesTransportation { get; set; }
        public string? TransportationType { get; set; }
        public decimal TransportationPricePerKilometer { get; set; }

        // Other trip-specific properties
        // (e.g., ItineraryDetails, FoodDetails, TourGuideName, etc.)
    }

}
