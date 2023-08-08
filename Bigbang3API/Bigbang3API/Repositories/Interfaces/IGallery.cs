
using Bigbang3API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Bigbang3API.Repository.Interface
{
    public interface IGallery
    {
        IEnumerable<string> GetAllImages();


       Task<Tour_gallery> ImageUpload(IFormFile imageFile);

    }
}
