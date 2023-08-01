
using System.ComponentModel.DataAnnotations;

public class Booking
{
    [Key]
    public int Id { get; set; }

    public int PackageId { get; set; }

    public DateTime Departure { get; set; }

    public int NumberOfAdult { get; set; }

    public int NumberOfChildren { get; set; }

    public int NumberOfInfant { get; set; }

    public string? TravelerName { get; set; }

    public decimal TotalCost { get; set; }
}
