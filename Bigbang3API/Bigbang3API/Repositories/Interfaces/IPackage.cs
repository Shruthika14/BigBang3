using Bigbang3API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bigbang3API.Repositories.Interfaces
{
    public interface IPackage
    {
        IEnumerable<Package> GetAllPackages();
         Package GetPackageById(int User_Id);
        Task<Package> CreatePackage([FromForm] Package Package, IFormFile imageFile);
        Task<Package> UpdatePackage(Package package, IFormFile imageFile);

        Task<List<Package>?> DeletePackageById(int id);
        IEnumerable<Package> FilterLocation(string Destination);
    }
}
