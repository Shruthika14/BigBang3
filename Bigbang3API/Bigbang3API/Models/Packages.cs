using System.ComponentModel.DataAnnotations;

public class Package
{
    [Key]
    public int PackageId { get; set; }

    [Required]
    public string? Title { get; set; }

    public string? Description { get; set; }

    [Required]
    public string? ApproximateDestination { get; set; }

    [Required]
    public string? From { get; set; }

    [Required]
    public string? Duration { get; set; }

    [Required]
    public string? Accommodation { get; set; }

    [Required]
    public string? Transportation { get; set; }

    [Required]
    public decimal AdultCost { get; set; }

    [Required]
    public string? ChildCost { get; set; }

    [Required]
    public string? Inclusions { get; set; }

    [Required]
    public string? Exclusions { get; set; }
   
    public string? ImageUrl { get; set; }


}
