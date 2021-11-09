using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FancyCalculationsController : ControllerBase
    {
        [HttpPost]
        public BusinessLogic.FancyCalculations.AnOutputType
            Calculate(BusinessLogic.FancyCalculations.AnInputType input) =>
            BusinessLogic.FancyCalculations.calculateSomeFancyStuff(input);
    }
}
