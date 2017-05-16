using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodAndMovieMashup.Models
{
    public interface IUserRepo
    {
        void Add(User item);
        IEnumerable<User> GetAll();
        User Find(long key);
        void Remove(long key);
        void Update(User item);
    }
 }
