//using Bigbang3API.Data;
//using Bigbang3API.Models;
//using Bigbang3API.Repositories.Interfaces;
//using Bigbang3API.Repository.Interface;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Mvc;
//using System.IO;
//using System.Linq;
//using System.Threading.Tasks;

//namespace Bigbang3API.Repository.Service
//{
//    public class ImageService : IGallery
//    {
//        private readonly TouristDbContext _UserContext;
//        private readonly IWebHostEnvironment _webHostEnvironment;
//        public ImageService(TouristDbContext context, IWebHostEnvironment webHostEnvironment)
//        {
//            _UserContext = context;
//            _webHostEnvironment = webHostEnvironment;
//        }

//        // GetAllImages
//        public IEnumerable<Tour_gallery> GetAllImages()
//        {
//            return _UserContext.Tour_gallery.ToList();
//        }

//        // Post
//        public async Task<Tour_gallery> ImageUpload(IFormFile imageFile)
//        {
//            if (imageFile == null || imageFile.Length == 0)
//            {
//                throw new ArgumentException("Invalid file");
//            }

//            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Gallery");
//            var fileName = imageFile.FileName;
//            var filePath = Path.Combine(uploadsFolder, fileName);

//            using (var stream = new FileStream(filePath, FileMode.Create))
//            {
//                await imageFile.CopyToAsync(stream);
//            }

//            var image = new Tour_gallery
//            {
//                Image = fileName
//            };

//            _UserContext.Tour_gallery.Add(image);
//            await _UserContext.SaveChangesAsync();

//            return image;
//        }


//    }
//}
using Bigbang3API.Data;
using Bigbang3API.Models;
using Bigbang3API.Repositories.Interfaces;
using Bigbang3API.Repository.Interface;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Bigbang3API.Repositories
{
    public class ImageService : IGallery
    {
        private readonly TouristDbContext _context;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ImageService(TouristDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            _webHostEnvironment = webHostEnvironment;
        }

        public IEnumerable<string> GetAllImages()
        {
            var imageList = new List<string>();
            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Gallery");

            foreach (var image in _context.Tour_gallery)
            {
                var filePath = Path.Combine(uploadsFolder, image.Image);
                imageList.Add(filePath);
            }

            return imageList;
        }

        public async Task<Tour_gallery> ImageUpload(IFormFile imageFile)
        {
            if (imageFile == null || imageFile.Length == 0)
            {
                throw new ArgumentException("Invalid file");
            }

            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Gallery");
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }

            var image = new Tour_gallery
            {
                Image = fileName
            };

            _context.Tour_gallery.Add(image);
            await _context.SaveChangesAsync();

            return image;
        }
    }
}
