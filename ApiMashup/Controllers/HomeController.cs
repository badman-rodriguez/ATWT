using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FoodAndMovieMashup.Controllers
{
    public class HomeController : Controller
    {
        // Can define routes as such 
        // https://docs.microsoft.com/en-us/aspnet/core/mvc/controllers/routing
        [Route("")]
        [Route("Home")]
        [Route("Home/Index")]
        [Route("Index")]
        public IActionResult Index()
        {
            return View();
        }
    }
}