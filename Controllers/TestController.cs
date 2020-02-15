using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace RFShell.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<TestController> _logger;

        public TestController(ILogger<TestController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("breadcrumbs")]
        public BreadCrumbItem[] Get(string tr, string t)
        {
            var rng = new Random();
            var breadcrumbs = Enumerable.Range(1, 5).Select(index => new BreadCrumbItem
            {
                Key = rng.Next().ToString(),
                Text = $"Crumb {rng.Next().ToString()}",
            })
            .ToArray();
            return breadcrumbs;
        }

        [HttpGet]
        [Route("sidebarmenu")]
        public MenuSidebar Get(string tr, string t, string m)
        {
            MenuSidebar sidebar = new MenuSidebar()
            {
                Groups = new MenuGroup[] {
                    new MenuGroup() {
                        Links = new MenuLink[] {
                            new MenuLink(){
                                Name="Link A",
                                Url = "http://www.cnn.com"
                            },
                            new MenuLink(){
                                Name="Link B",
                                Url = "http://www.cnn.com"
                            },
                            new MenuLink(){
                                Name="Link C",
                                Url = "http://www.cnn.com",
                                Links = new MenuLink[]{
                                    new MenuLink(){
                                        Name="Link C.1",
                                        Url = "http://www.cnn.com"
                                    },
                                     new MenuLink(){
                                        Name="Link C.2",
                                        Url = "http://www.cnn.com"
                                    },
                                }
                            },
                            new MenuLink(){
                                Name="Link D",
                                Url = "http://www.cnn.com"
                            },
                            new MenuLink(){
                                Name="Link E",
                                Url = "http://www.cnn.com"
                            },
                            new MenuLink(){
                                Name="Link F",
                                Url = "http://www.cnn.com"
                            },
                        }
                    }
                }
            };

            return sidebar;
        }
    }
}
