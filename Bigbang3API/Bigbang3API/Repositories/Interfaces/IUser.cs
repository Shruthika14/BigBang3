
using Bigbang3API.Models;

namespace bigbang3api.repositories.interfaces
{
    public interface IUser
{
        Task<User> AddUser(User user);
  Task<IEnumerable<User>> GetAllUsers();
       Task<User> GetUserById(int userId);
        Task UpdateUser(User user);
        Task<User> GetUserByEmail(string email);
        Task<IEnumerable<User>> GetPendingUsers();
        Task DeleteUser(User user);
    
}
}