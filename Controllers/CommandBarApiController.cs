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
    public class CommandBarApiController : ControllerBase
    {
        private readonly ILogger<CommandBarApiController> _logger;

        public CommandBarApiController(ILogger<CommandBarApiController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        //[Route("CommandBar")]
        public CommandBarItemCollection Get()
        {
            var rnd = new Random();
            CommandBarItemCollection collection = new CommandBarItemCollection();
            collection.Key = "1";
            collection.Name = "CommandBar";
            collection.AriaLabel = "CommandBar";
            collection.Items = Enumerable.Range(1, 10).Select(index => new CommandBarItem
            {
                Key = rnd.Next().ToString(),
                Name = $"Menu {rnd.Next().ToString()}",
                IconProps = new IconProp().RandomIcon(),
                SubMenuProps = new CommandBarItemCollection()
                {
                    Items = Enumerable.Range(1, rnd.Next(0, 10)).Select(index => new CommandBarItem
                    {
                        Key = rnd.Next().ToString(),
                        Name = $"Sub menu {rnd.Next().ToString()}",
                        IconProps = new IconProp().RandomIcon()
                    })
                    .ToArray()
                }
            })
            .ToArray();

            return collection;
        }
    }
}
