using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace RFShell.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class BreadcrumbsApiController : ControllerBase
    {
        private readonly ILogger<BreadcrumbsApiController> _logger;

        public BreadcrumbsApiController(ILogger<BreadcrumbsApiController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public BreadcrumbItem[] Get()
        {
            var rng = new Random();
            var breadcrumbs = Enumerable.Range(1, 5).Select(index => new BreadcrumbItem
            {
                Key = rng.Next().ToString(),
                Text = $"Crumb {rng.Next().ToString()}",
            })
            .ToArray();
            return breadcrumbs;
        }
    }
}
