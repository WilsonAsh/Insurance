using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insurance.Models
{
    public class Premium
    {
        public string Name { get; set; }
        public IEnumerable<SelectListItem> Occupation { get; set; }
        public int Age { get; set; }
        public DateTime DateOfBirth { get; set; }
        public decimal DeathSumInsured { get; set; }
        public decimal MonthlyPremium { get; set; }      

    }
}
