using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Bigbang3API.Data;
using Bigbang3API.Models;

namespace Bigbang3API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestimonialsController : ControllerBase
    {
        private readonly TouristDbContext _context;

        public TestimonialsController(TouristDbContext context)
        {
            _context = context;
        }

        // GET: api/Testimonials
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Testimonial>>> GetTestimonial()
        {
          if (_context.Testimonial == null)
          {
              return NotFound();
          }
            return await _context.Testimonial.ToListAsync();
        }

        // GET: api/Testimonials/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Testimonial>> GetTestimonial(int id)
        {
          if (_context.Testimonial == null)
          {
              return NotFound();
          }
            var testimonial = await _context.Testimonial.FindAsync(id);

            if (testimonial == null)
            {
                return NotFound();
            }

            return testimonial;
        }

        // PUT: api/Testimonials/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTestimonial(int id, Testimonial testimonial)
        {
            if (id != testimonial.Id)
            {
                return BadRequest();
            }

            _context.Entry(testimonial).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TestimonialExists(id))
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

        // POST: api/Testimonials
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Testimonial>> PostTestimonial(Testimonial testimonial)
        {
          if (_context.Testimonial == null)
          {
              return Problem("Entity set 'TouristDbContext.Testimonial'  is null.");
          }
            _context.Testimonial.Add(testimonial);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTestimonial", new { id = testimonial.Id }, testimonial);
        }

        // DELETE: api/Testimonials/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTestimonial(int id)
        {
            if (_context.Testimonial == null)
            {
                return NotFound();
            }
            var testimonial = await _context.Testimonial.FindAsync(id);
            if (testimonial == null)
            {
                return NotFound();
            }

            _context.Testimonial.Remove(testimonial);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TestimonialExists(int id)
        {
            return (_context.Testimonial?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
