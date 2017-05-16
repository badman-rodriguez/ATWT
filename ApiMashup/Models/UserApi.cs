using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodAndMovieMashup.Data;

namespace FoodAndMovieMashup.Models
{
    public class UserApi : IUserRepo
    {
        private readonly UserProfileContext _context;

        public UserApi(UserProfileContext context)
        {
            _context = context;

            if (_context.Users.Count() == 0)
                Add(new User {
                    FirstMidName = "Name",
                    LastName ="Last name",
                    Email = "1@1.com"
                });
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users.ToList();
        }

        public void Add(User item)
        {
            _context.Users.Add(item);
            _context.SaveChanges();
        }

        public User Find(long key)
        {
            return _context.Users.FirstOrDefault(t => t.UserID == key);
           // User user = new User();
           // return user;
        }

        public void Remove(long key)
        {
            var entity = _context.Users.First(t => t.UserID == key);

            _context.Users.Remove(entity);
            _context.SaveChanges();
        }

        public void Update(User item)
        {
            _context.Users.Update(item);
            _context.SaveChanges();
        }
    }

}
