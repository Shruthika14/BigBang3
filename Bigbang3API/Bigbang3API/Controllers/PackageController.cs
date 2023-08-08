
//using bigbang3api.models;
//using bigbang3api.repositories.interfaces;
//using microsoft.aspnetcore.http;
//using microsoft.aspnetcore.mvc;

//namespace bigbang3api.controllers
//{
//    [route("api/[controller]")]
//    [apicontroller]
//    public class packagecontroller : controllerbase
//    {
//        private readonly ipackage _user;
//        public packagecontroller(ipackage user)
//        {
//            _user = user;
//        }
//        [httpget]
//        public ienumerable<package> get()
//        {
//            return _user.getallpackages();
//        }
//        [httpget("{id}")]
//        public package getbyid(int packageid)
//        {
//            return _user.getpackagebyid(packageid);
//        }
//        [httppost]
//        public async task<actionresult<package>> post([fromform] package package, iformfile imagefile)
//        {

//            try
//            {
//                var createdpackage = await _user.createpackage(package, imagefile);
//                return createdataction("get", new { id = createdpackage.packageid }, createdpackage);

//            }
//            catch (argumentexception ex)
//            {
//                modelstate.addmodelerror("", ex.message);
//                return badrequest(modelstate);
//            }
//        }

//        [httpput("{id}")]
//        public async task<actionresult<package>> put(int packageid, [fromform] package package, iformfile imagefile)
//        {
//            try
//            {
//                package.packageid = packageid;
//                var updatedpackage = await _user.updatepackage(package, imagefile);
//                return ok(updatedpackage);
//            }
//            catch (argumentexception ex)
//            {
//                modelstate.addmodelerror("", ex.message);
//                return badrequest(modelstate);
//            }
//        }

//        [httpdelete("{id}")]
//        public async task<actionresult<list<package>>> deletepackagebyid(int packageid)
//        {
//            var users = await _user.deletepackagebyid(packageid);
//            if (users is null)
//            {
//                return notfound("package not matching");
//            }
//            return ok(users);
//        }

//        // destination
//        [httpget("filteringlocation")]

//        public ienumerable<package> filterlocation(string destination)
//        {
//            return _user.filterlocation(destination);

//        }
//    }
//}
//using bigbang3api.models;
//using bigbang3api.repositories.interfaces;
//using microsoft.aspnetcore.http;
//using microsoft.aspnetcore.mvc;

//namespace bigbang3api.controllers
//{
//    [route("api/[controller]")]
//    [apicontroller]
//    public class packagecontroller : controllerbase
//    {
//        private readonly ipackage _user;
//        public packagecontroller(ipackage user)
//        {
//            _user = user;
//        }
//        [httpget]
//        public ienumerable<package> get()
//        {
//            return _user.getallpackages();
//        }
//        [httpget("{id}")]
//        public package getbyid(int id)
//        {
//            return _user.getpackagebyid(id);
//        }
//        [httppost]
//        public async task<actionresult<package>> post([fromform] package package, iformfile imagefile)
//        {

//            try
//            {
//                var createdpackage = await _user.createpackage(package, imagefile);
//                return createdataction("get", new { id = createdpackage.packageid }, createdpackage);

//            }
//            catch (argumentexception ex)
//            {
//                modelstate.addmodelerror("", ex.message);
//                return badrequest(modelstate);
//            }
//        }

//        [httpput("{id}")]
//        public async task<actionresult<package>> put(int id, [fromform] package package, iformfile imagefile)
//        {
//            try
//            {
//                package.packageid = id;
//                var updatedpackage = await _user.updatepackage(package, imagefile);
//                return ok(updatedpackage);
//            }
//            catch (argumentexception ex)
//            {
//                modelstate.addmodelerror("", ex.message);
//                return badrequest(modelstate);
//            }
//        }

//        [httpdelete("{id}")]
//        public async task<actionresult<list<package>>> deletepackagebyid(int id)
//        {
//            var users = await _user.deletepackagebyid(id);
//            if (users is null)
//            {
//                return notfound("package not matching");
//            }
//            return ok(users);
//        }

//        destination
//       [httpget("filteringlocation")]

//        public ienumerable<package> filterlocation(string destination)
//        {
//            return _user.filterlocation(destination);

//        }
//    }
//}

using Bigbang3API.Models;
using Bigbang3API.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bigbang3API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {
        private readonly IPackage _user;
        public PackageController(IPackage user)
        {
            _user = user;
        }

        [HttpGet]
        public IEnumerable<Package> Get()
        {
            return _user.GetAllPackages();
        }

        [HttpGet("{id}")]
        public Package GetById(int id)
        {
            return _user.GetPackageById(id);
        }

        [HttpPost]
        public async Task<ActionResult<Package>> Post([FromForm] Package package, IFormFile imageFile)
        {
            try
            {
                var createdPackage = await _user.CreatePackage(package, imageFile);

                // Assume you have booking details available, replace with actual data
                var bookingDetails = new Booking
                {
                    BookingId = 1, // Replace with the actual booking ID
                    StartOfJourney = DateTime.Now,
                    EndOfJourney = DateTime.Now,

                    BookedBy = "John Doe" // Replace with the actual customer name
                    // Add other booking-related properties as needed.
                };

                var bookingBill = new BookingBill
                {
                   PackageDetails = createdPackage,
                    bookingDetails = bookingDetails,
                    // Add other properties for the bill, e.g., TotalCost, PaymentStatus, etc.
                };

                // Now you can process the bookingBill object to generate the bill, e.g., save it to a database or send it to the customer.

                return CreatedAtAction("Get", new { id = createdPackage.PackageId }, createdPackage);
            }
            catch (ArgumentException ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Package>> Put(int id, [FromForm] Package package, IFormFile imageFile)
        {
            try
            {
                package.PackageId = id;
                var updatedPackage = await _user.UpdatePackage(package, imageFile);
                return Ok(updatedPackage);
            }
            catch (ArgumentException ex)
            {
                ModelState.AddModelError("", ex.Message);
                return BadRequest(ModelState);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Package>>> DeletePackageById(int id)
        {
            var users = await _user.DeletePackageById(id);
            if (users is null)
            {
                return NotFound("package not matching");
            }
            return Ok(users);
        }

        // Destination
        [HttpGet("filteringLocation")]
        public IEnumerable<Package> Filterlocation(string Destination)
        {
            return _user.FilterLocation(Destination);
        }
    }
}
