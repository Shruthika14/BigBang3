﻿using Bigbang3API.Data;
using Bigbang3API.Models;
using Bigbang3API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace Bigbang3API.Repositories.Services
{
    public class UserServices:IUser
    {
             private readonly TouristDbContext _context;

            public UserServices(TouristDbContext context)
            {
                _context = context;
            }

            public async Task<User> AddUser(User user)
            {
                // No need to re-encrypt the password here since it's already encrypted in the UsersController
                // user.Password = Encrypt(user.Password);

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                return user;
            }

            public async Task<IEnumerable<User>> GetAllUsers()
            {
                var users = await _context.Users.ToListAsync();

                // Note: Uncomment the decryption logic if you want to decrypt the passwords before returning

                return users;
            }

            public async Task<User> GetUserByEmail(string email)
            {
                // Implement the logic to get the user by email from the database
                return await _context.Users.FirstOrDefaultAsync(u => u.Email== email);
            }

            private string Encrypt(string password)
            {
                // Example key and IV generation using hashing
                string passphrase = "your-passphrase";

                using (SHA256 sha256 = SHA256.Create())
                {
                    byte[] key = sha256.ComputeHash(Encoding.UTF8.GetBytes(passphrase));
                    byte[] iv = sha256.ComputeHash(Encoding.UTF8.GetBytes(passphrase)).Take(16).ToArray();

                    using (Aes aes = Aes.Create())
                    {
                        aes.Key = key;
                        aes.IV = iv;

                        ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                        using (MemoryStream memoryStream = new MemoryStream())
                        {
                            using (CryptoStream cryptoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write))
                            {
                                using (StreamWriter writer = new StreamWriter(cryptoStream))
                                {
                                    writer.Write(password);
                                }
                            }

                            byte[] encryptedData = memoryStream.ToArray();
                            return Convert.ToBase64String(encryptedData);
                        }
                    }
                }
            }

            private string Decrypt(string encryptedPassword)
            {
                // Example key and IV generation using hashing
                string passphrase = "your-passphrase";

                using (SHA256 sha256 = SHA256.Create())
                {
                    byte[] key = sha256.ComputeHash(Encoding.UTF8.GetBytes(passphrase));
                    byte[] iv = sha256.ComputeHash(Encoding.UTF8.GetBytes(passphrase)).Take(16).ToArray();

                    using (Aes aes = Aes.Create())
                    {
                        aes.Key = key;
                        aes.IV = iv;

                        ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

                        byte[] encryptedData = Convert.FromBase64String(encryptedPassword);

                        using (MemoryStream memoryStream = new MemoryStream(encryptedData))
                        {
                            using (CryptoStream cryptoStream = new CryptoStream(memoryStream, decryptor, CryptoStreamMode.Read))
                            {
                                using (StreamReader reader = new StreamReader(cryptoStream))
                                {
                                    return reader.ReadToEnd();
                                }
                            }
                        }
                    }
                }
            }
        }
    }

