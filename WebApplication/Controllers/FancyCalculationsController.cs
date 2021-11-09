using System;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FancyCalculationsController : ControllerBase
    {
        [HttpGet]
        public object Get() => throw new NotImplementedException();
    }
}
