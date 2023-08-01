using Bigbang3API.Models.imageuploadapi.Models;
using Bigbang3API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Bigbang3API.Data;

namespace Bigbang3API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {
            private readonly TouristDbContext db;
            public FileController(TouristDbContext _db)
            {
                db = _db;
            }


        [HttpGet("GetImages")]
        public IActionResult GetImages()
        {
            try
            {
                string imagePath = Path.Combine("wwwroot", "Images");

                if (!Directory.Exists(imagePath))
                {
                    return NotFound(); // Return 404 Not Found if the Gallery folder does not exist.
                }

                string[] imageFiles = Directory.GetFiles(imagePath);

                if (imageFiles.Length == 0)
                {
                    return NotFound(); // Return 404 Not Found if there are no image files in the Gallery folder.
                }

                // For simplicity, let's assume there's only one image for this example
                string imageFile = imageFiles[0];

                // Determine the content type based on the file extension
                string contentType = GetContentType(imageFile);

                // Read the image bytes from the file
                byte[] imageBytes = System.IO.File.ReadAllBytes(imageFile);

                // Return the image bytes as a FileContentResult
                return new FileContentResult(imageBytes, contentType);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        private string GetContentType(string filePath)
        {
            // Get the file extension to determine the content type
            string extension = Path.GetExtension(filePath)?.ToLowerInvariant();
            switch (extension)
            {
                case ".jpg":
                case ".jpeg":
                    return "image/jpeg";
                case ".png":
                    return "image/png";
                case ".gif":
                    return "image/gif";
                default:
                    return "application/octet-stream";
            }
        }
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
            public async Task<ActionResult<Imagetbl>> PostImagetbl([FromForm] FileModel file)
            {
                try
                {
                    string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/Images", file.FileName);
                    using (Stream stream = new FileStream(path, FileMode.Create))
                    {
                        file.FormFile.CopyTo(stream);
                        Imagetbl imgtbl = new Imagetbl();
                        imgtbl.Imgname = "~/Images/" + file.FileName;
                        db.Imagetbls.Add(imgtbl);
                        await db.SaveChangesAsync();
                    }
                    return StatusCode(StatusCodes.Status201Created);
                }
                catch (Exception e)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }

            }
        }

    }

