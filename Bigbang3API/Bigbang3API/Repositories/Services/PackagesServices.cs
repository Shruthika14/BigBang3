
//using Bigbang3API.Data;
//using Bigbang3API.Models;
//using Bigbang3API.Repositories.Interfaces;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;

//namespace Bigbang3API.Repository.Service
//{
//    public class PackageService : IPackageService
//    {
//        private readonly TouristDbContext _UserContext;
//        private readonly IWebHostEnvironment _webHostEnvironment;
//        public PackageService(TouristDbContext context, IWebHostEnvironment webHostEnvironment)
//        {
//            _UserContext = context;
//            _webHostEnvironment = webHostEnvironment;
//        }
//        //GetAllTours
//        public IEnumerable<Package> GetAllPackages()
//        {
//            return _UserContext.Packages.ToList();
//        }
//        //GetTourById
//        public Package GetPackageById(int Packageid)
//        {
//            return _UserContext.Packages.FirstOrDefault(x => x.PackageId == Packageid);
//        }
//        //Post
//        public async Task<Package> CreatePackage([FromForm] Package packages, IFormFile imageFile)
//        {
//            if (imageFile == null || imageFile.Length == 0)
//            {
//                throw new ArgumentException("Invalid file");
//            }

//            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Package_Images");
//            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
//            var filePath = Path.Combine(uploadsFolder, fileName);

//            using (var stream = new FileStream(filePath, FileMode.Create))
//            {
//                await imageFile.CopyToAsync(stream);
//            }

//            packages.ImageUrl = fileName;

//            _UserContext.Packages.Add(packages);
//            await _UserContext.SaveChangesAsync();

//            return packages;
//        }

//        //update

//        public async Task<Package> UpdatePackage(Package package, IFormFile imageFile)
//        {

//            var existingPackage = await _UserContext.Packages.FindAsync(package.PackageId);

//            if (existingPackage == null)
//            {
//                throw new ArgumentException("Package not found");
//            }

//            existingPackage.Title = package.Title;
//            existingPackage.ApproximateDestination = package.ApproximateDestination;

//            if (imageFile != null && imageFile.Length > 0)
//            {
//                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Package_Images");
//                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
//                var filePath = Path.Combine(uploadsFolder, fileName);

//                using (var stream = new FileStream(filePath, FileMode.Create))
//                {
//                    await imageFile.CopyToAsync(stream);
//                }

//                existingPackage.ImageUrl = fileName;

//            }

//            await _UserContext.SaveChangesAsync();

//            return existingPackage;
//        }

//        //Delete
//        public async Task<List<Package>?> DeletePackageById(int Packageid)
//        {
//            var users = await _UserContext.Packages.FindAsync(Packageid);
//            if (users is null)
//            {
//                return null;
//            }
//            _UserContext.Remove(users);
//            await _UserContext.SaveChangesAsync();
//            return await _UserContext.Packages.ToListAsync();
//        }
//        //Filtering location
//        public IEnumerable<Package> FilterLocation(string Destination)
//        {
//            try
//            {
//                var query = _UserContext.Packages.AsQueryable();

//                if (!string.IsNullOrEmpty(Destination))
//                {
//                    query = query.Where(h => h.ApproximateDestination.Contains(Destination));
//                }
//                return query.ToList();
//            }
//            catch (Exception ex)
//            {
//                throw new Exception("An error occurred while filtering the Location.", ex);
//            }
//        }
//    }
//}




using Bigbang3API.Data;
using Bigbang3API.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Bigbang3API.Repository.Service
{
    public class PackageService : IPackage
    {
        private readonly TouristDbContext _UserContext;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public PackageService(TouristDbContext context, IWebHostEnvironment webHostEnvironment)
        {
            _UserContext = context;
            _webHostEnvironment = webHostEnvironment;
        }
        //GetAllTours
        public IEnumerable<Package> GetAllPackages()
        {
            return _UserContext.Packages.ToList();
        }
        //GetTourById
        public Package GetPackageById(int User_Id)
        {
            return _UserContext.Packages.FirstOrDefault(x => x.PackageId == User_Id);
        }
        //Post
        public async Task<Package> CreatePackage([FromForm] Package Package, IFormFile imageFile)
        {
            if (imageFile == null || imageFile.Length == 0)
            {
                throw new ArgumentException("Invalid file");
            }

            var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Package_Images");
            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
            var filePath = Path.Combine(uploadsFolder, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(stream);
            }

            Package.ImageUrl = fileName;

            _UserContext.Packages.Add(Package);
            await _UserContext.SaveChangesAsync();

            return Package;
        }

        //update

        public async Task<Package> UpdatePackage(Package package, IFormFile imageFile)
        {

            var existingPackage = await _UserContext.Packages.FindAsync(package.PackageId);

            if (existingPackage == null)
            {
                throw new ArgumentException("Package not found");
            }

            existingPackage.Title = package.Title;
            existingPackage.ApproximateDestination = package.ApproximateDestination;

            if (imageFile != null && imageFile.Length > 0)
            {
                var uploadsFolder = Path.Combine(_webHostEnvironment.WebRootPath, "Package_Images");
                var fileName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);
                var filePath = Path.Combine(uploadsFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(stream);
                }

                existingPackage.ImageUrl = fileName;

            }

            await _UserContext.SaveChangesAsync();

            return existingPackage;
        }

        //Delete
        public async Task<List<Package>?> DeletePackageById(int id)
        {
            var users = await _UserContext.Packages.FindAsync(id);
            if (users is null)
            {
                return null;
            }
            _UserContext.Remove(users);
            await _UserContext.SaveChangesAsync();
            return await _UserContext.Packages.ToListAsync();
        }
        //Filtering location
        public IEnumerable<Package> FilterLocation(string Destination)
        {
            try
            {
                var query = _UserContext.Packages.AsQueryable();

                if (!string.IsNullOrEmpty(Destination))
                {
                    query = query.Where(h => h.ApproximateDestination.Contains(Destination));
                }
                return query.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while filtering the Location.", ex);
            }
        }
    }
}
