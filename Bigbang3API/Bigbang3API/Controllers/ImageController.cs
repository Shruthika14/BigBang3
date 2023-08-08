
//using Bigbang3API.Models;
//using Bigbang3API.Repositories.Interfaces;
//using Bigbang3API.Repository.Interface;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using System.Threading.Tasks;

//namespace Bigbang3API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class ImageController : ControllerBase
//    {
//        private readonly IGallery _user;
//        private readonly IWebHostEnvironment _webHostEnvironment;
//        public ImageController(IGallery user, IWebHostEnvironment webHostEnvironment)
//        {
//            _user = user;
//            _webHostEnvironment = webHostEnvironment;
//        }

//        [HttpGet]
//        public IActionResult GetAllImages()
//        {
//            var images = _user.GetAllImages();
//            if (images == null)
//            {
//                return NotFound();
//            }

//            var imageList = new List<FileContentResult>();
//            foreach (var image in images)
//            {
//                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Gallery");
//                var filePath = Path.Combine(uploadsFolder, image.Image);

//                var imageBytes = System.IO.File.ReadAllBytes(filePath);
//                imageList.Add(File(imageBytes, "image/jpeg"));
//            }

//            return new JsonResult(imageList);
//        }

//        [HttpPost]
//        public async Task<IActionResult> Post(IFormFile imageFile)
//        {
//            try
//            {
//                var uploadedImage = await _user.ImageUpload(imageFile);
//                return CreatedAtAction("Post", uploadedImage);
//            }
//            catch (ArgumentException ex)
//            {
//                return BadRequest(ex.Message);
//            }
//        }
//    }
//}
using Bigbang3API.Models;
using Bigbang3API.Repositories.Interfaces;
using Bigbang3API.Repository.Interface;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Bigbang3API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IGallery _gallery;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ImageController(IGallery gallery, IWebHostEnvironment webHostEnvironment)
        {
            _gallery = gallery;
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpGet]
        public IActionResult GetAllImages()
        {
            var images = _gallery.GetAllImages();
            if (images == null)
            {
                return NotFound();
            }

            return new JsonResult(images);
        }

        [HttpPost]
        public async Task<IActionResult> Post(IFormFile imageFile)
        {
            try
            {
                var uploadedImage = await _gallery.ImageUpload(imageFile);
                return CreatedAtAction(nameof(GetAllImages), uploadedImage);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
