using Bigbang3API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Bigbang3API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {

        private readonly TouristDbContext _dbContext; 

        public PackageController(TouristDbContext dbContext) 
        {
            _dbContext = dbContext;
        }

        // GET: api/Package
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Package>>> GetPackages()
        {
            var packages = await _dbContext.Packages.ToListAsync();
            return Ok(packages);
        }

        // GET: api/Package/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Package>> GetPackage(int id)
        {
            var package = await _dbContext.Packages.FindAsync(id);
            if (package == null)
            {
                return NotFound();
            }
            return Ok(package);
        }

        // POST: api/Package
        [HttpPost]
        public async Task<ActionResult<Package>> PostPackage(Package tourPackage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _dbContext.Packages.Add(tourPackage);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPackage), new { id = tourPackage.Id }, tourPackage);
        }

        // PUT: api/Package/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPackage(int id, Package Package)
        {
            if (id != Package.Id)
            {
                return BadRequest();
            }

            _dbContext.Entry(Package).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PackageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Package/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePackage(int id)
        {
            var Package = await _dbContext.Packages.FindAsync(id);
            if (Package == null)
            {
                return NotFound();
            }

            _dbContext.Packages.Remove(Package);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool PackageExists(int id)
        {
            return _dbContext.Packages.Any(e => e.Id == id);
        }
    }
}

