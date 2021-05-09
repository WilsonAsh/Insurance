using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Insurance.Models;

namespace Insurance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PremiumValuesController : ControllerBase
    {
        [HttpPost]
        public decimal GetInsurancePremium([FromForm] decimal SumInsured, [FromForm] int Age, [FromForm] string Occupation)
        {
            decimal monthlyPremium = 0;
            switch (Occupation)
            {
                case "Cleaner":
                    monthlyPremium = CalculatePremium(SumInsured, Constants.LIGHTMANUAL, Age);
                    break;
                case "Doctor":
                    monthlyPremium = CalculatePremium(SumInsured, Constants.PROFESSIONAL, Age);
                    break;
                case "Author":
                    monthlyPremium = CalculatePremium(SumInsured, Constants.WHITECOLLAR, Age);
                    break;
                case "Farmer":
                    monthlyPremium = CalculatePremium(SumInsured, Constants.HEAVYMANUAL, Age);
                    break;
                case "Mechanic":
                    monthlyPremium = CalculatePremium(SumInsured, Constants.HEAVYMANUAL, Age);
                    break;
                case "Florist":
                    monthlyPremium = CalculatePremium(SumInsured, Constants.LIGHTMANUAL, Age);
                    break;
                default:
                    break;
            }

            return monthlyPremium;
        }
               
        public decimal CalculatePremium(decimal amount, double factor, int age)
        {
            decimal premiumAmount = (amount * Convert.ToDecimal(factor) * age) / (1000 * 12);
            return premiumAmount;
        }
    }
}
