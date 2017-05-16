using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FoodAndMovieMashup.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FoodAndMovieMashup.Controllers
{
    [Route("api/[controller]")]
    public class UserApiController : Controller
    {
        private readonly IUserRepo _userRepo;

        public UserApiController(IUserRepo userRepo)
        {
            _userRepo = userRepo;
        }

        // GET: api/userapi
        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return _userRepo.GetAll();
        }

        // GET api/userapi/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var item = _userRepo.Find(id);

            if (item == null) {
                return NotFound();
            }
            return new ObjectResult(item);
        }
    }
}
