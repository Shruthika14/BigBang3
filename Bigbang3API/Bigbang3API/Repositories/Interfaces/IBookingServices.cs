using Bigbang3API.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bigbang3API.Services
{
    public interface IBookingServices
    {
        Task<IEnumerable<Booking>> GetBookings();
        Task<Booking> GetBooking(int id);
        Task<bool> UpdateBooking(int id, Booking booking);
        Task<Booking> AddPatient(Booking booking);
        Task<bool> DeleteBooking(int id);
    }
}
