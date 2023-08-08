
//using Bigbang3API.Data;
//using Bigbang3API.Models;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;

//[ApiController]
//[Route("api/[controller]")]
//public class TestimonialsController : ControllerBase
//{
//    private readonly TouristDbContext _context;

//    public TestimonialsController(TouristDbContext context)
//    {
//        _context = context;
//    }

//    // GET: api/Testimonials
//    [HttpGet]
//    public async Task<ActionResult<IEnumerable<Testimonial>>> GetTestimonials()
//    {
//        var testimonials = await _context.Testimonial.ToListAsync();
//        if (testimonials.Count == 0)
//        {
//            return NotFound(); // 404 Not Found when there are no testimonials
//        }
//        return Ok(testimonials); // 200 OK with the list of testimonials
//    }

//    // GET: api/Testimonials/5
//    [HttpGet("{testimonialid}")]
//    public async Task<ActionResult<Testimonial>> GetTestimonial(int testimonialid)
//    {
//        var testimonial = await _context.Testimonial.FindAsync(testimonialid);
//        if (testimonial == null)
//        {
//            return NotFound(); // 404 Not Found if the testimonial is not found
//        }
//        return Ok(testimonial); // 200 OK with the found testimonial
//    }

//    // PUT: api/Testimonials/5
//    [HttpPut("{testimonialid}")]
//    public async Task<IActionResult> PutTestimonial(int testimonialid, Testimonial testimonial)
//    {
//        if (testimonialid != testimonial.TestimonialId)
//        {
//            return BadRequest(); // 400 Bad Request if the testimonialid doesn't match with the testimonial object
//        }

//        _context.Entry(testimonial).State = EntityState.Modified;

//        try
//        {
//            await _context.SaveChangesAsync();
//        }
//        catch (DbUpdateConcurrencyException)
//        {
//            if (!TestimonialExists(testimonialid))
//            {
//                return NotFound(); // 404 Not Found if the testimonial to update doesn't exist
//            }
//            else
//            {
//                throw;
//            }
//        }

//        return NoContent(); // 204 No Content if the update is successful
//    }

//    // POST: api/Testimonials
//    [HttpPost]
//    public async Task<ActionResult<Testimonial>> PostTestimonial(Testimonial testimonial)
//    {
//        _context.Testimonial.Add(testimonial);
//        await _context.SaveChangesAsync();

//        return CreatedAtAction(nameof(GetTestimonial), new { testimonialid = testimonial.TestimonialId }, testimonial);
//        // 201 Created with the newly created testimonial and a Location header with the URL of the newly created resource
//    }

//    // DELETE: api/Testimonials/5
//    [HttpDelete("{testimonialid}")]
//    public async Task<IActionResult> DeleteTestimonial(int testimonialid)
//    {
//        var testimonial = await _context.Testimonial.FindAsync(testimonialid);
//        if (testimonial == null)
//        {
//            return NotFound(); // 404 Not Found if the testimonial to delete doesn't exist
//        }

//        _context.Testimonial.Remove(testimonial);
//        await _context.SaveChangesAsync();

//        return NoContent(); // 204 No Content if the deletion is successful
//    }

//    private bool TestimonialExists(int testimonialid)
//    {
//        return _context.Testimonial.Any(e => e.TestimonialId == testimonialid);
//    }
//}

using Bigbang3API.Data;
using Bigbang3API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class TestimonialsController : ControllerBase
{
    private readonly TouristDbContext _context;

    public TestimonialsController(TouristDbContext context)
    {
        _context = context;
    }

    // GET: api/Testimonials
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Testimonial>>> GetTestimonials()
    {
        var testimonials = await _context.Testimonial.ToListAsync();
        if (testimonials.Count == 0)
        {
            return NotFound(); // 404 Not Found when there are no testimonials
        }
        return Ok(testimonials); // 200 OK with the list of testimonials
    }

    // GET: api/Testimonials/5
    [HttpGet("{testimonialid}")]
    public async Task<ActionResult<Testimonial>> GetTestimonial(int testimonialid)
    {
        var testimonial = await _context.Testimonial.FindAsync(testimonialid);
        if (testimonial == null)
        {
            return NotFound(); // 404 Not Found if the testimonial is not found
        }
        return Ok(testimonial); // 200 OK with the found testimonial
    }

    // PUT: api/Testimonials/5
    [HttpPut("{testimonialid}")]
    public async Task<IActionResult> PutTestimonial(int testimonialid, Testimonial testimonial)
    {
        if (testimonialid != testimonial.TestimonialId)
        {
            return BadRequest(); // 400 Bad Request if the testimonialid doesn't match with the testimonial object
        }

        _context.Entry(testimonial).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TestimonialExists(testimonialid))
            {
                return NotFound(); // 404 Not Found if the testimonial to update doesn't exist
            }
            else
            {
                throw;
            }
        }

        return NoContent(); // 204 No Content if the update is successful
    }

    // POST: api/Testimonials
    [HttpPost]
    public async Task<ActionResult<Testimonial>> PostTestimonial(Testimonial testimonial)
    {
        _context.Testimonial.Add(testimonial);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTestimonial), new { testimonialid = testimonial.TestimonialId }, testimonial);
        // 201 Created with the newly created testimonial and a Location header with the URL of the newly created resource
    }

    // DELETE: api/Testimonials/5
    [HttpDelete("{testimonialid}")]
    public async Task<IActionResult> DeleteTestimonial(int testimonialid)
    {
        var testimonial = await _context.Testimonial.FindAsync(testimonialid);
        if (testimonial == null)
        {
            return NotFound(); // 404 Not Found if the testimonial to delete doesn't exist
        }

        _context.Testimonial.Remove(testimonial);
        await _context.SaveChangesAsync();

        return NoContent(); // 204 No Content if the deletion is successful
    }

    private bool TestimonialExists(int testimonialid)
    {
        return _context.Testimonial.Any(e => e.TestimonialId == testimonialid);
    }
}

