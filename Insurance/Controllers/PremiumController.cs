using Insurance.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Controllers
{
    public class PremiumController : Controller
    {
        public IActionResult Index()
        {
            var list = new List<SelectListItem>
            {
              
                new SelectListItem{ Text="Cleaner", Value = "Cleaner" },
                new SelectListItem{ Text="Doctor", Value = "Doctor" },
                new SelectListItem{ Text="Author", Value = "Author" },
                new SelectListItem{ Text="Farmer", Value = "Farmer" },
                new SelectListItem{ Text="Mechanic", Value = "Mechanic" },
                new SelectListItem{ Text="Florist", Value = "Florist"},
            };

            ViewData["Occupation"] = list;
            return View(new Premium());
        }        
    }
}
