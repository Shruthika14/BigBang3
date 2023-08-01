using Bigbang3API.Models;

namespace Bigbang3API.Repositories.Interfaces
{
    public interface IUser
    {
        Task<User> GetUserByEmail(string email);

       Task<User> AddUser(User user);
        Task<IEnumerable<User>> GetAllUsers();
        
    }
}
