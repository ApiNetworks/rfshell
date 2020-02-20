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
    public class SideBarApiController : ControllerBase
    {
        private readonly ILogger<SideBarApiController> _logger;

        public SideBarApiController(ILogger<SideBarApiController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public SidebarLinkItemCollection Get()
        {
            return new SidebarLinkItemCollection()
            {
                Groups = GetRandomLinkItems()
            };
        }

        public SidebarLinkItem[] GetRandomLinkItems()
        {
            var rnd = new Random();
            return Enumerable.Range(5, rnd.Next(6, 10)).Select(index => GetRandomLinkItem()).ToArray();
        }

        public SidebarLinkItem GetRandomLinkItem()
        {
            return new SidebarLinkItem()
            {
                Name = GetRandomLinkName(),
                Url = GetRandomLinkUrl(),
                IconProps = new IconProp().RandomIcon(),
                Links = GetRandomSubLinkItems()
            };
        }

        public SidebarLinkItem[] GetRandomSubLinkItems()
        {
            var rnd = new Random();
            return Enumerable.Range(5, rnd.Next(6, 10)).Select(index => GetRandomSubLinkItem()).ToArray();
        }

        public SidebarLinkItem GetRandomSubLinkItem()
        {
            return new SidebarLinkItem()
            {
                Name = GetRandomLinkName(),
                Url = GetRandomLinkUrl(),
                IconProps = new IconProp().RandomIcon(),
            };
        }

        public string GetRandomLinkName()
        {
            var rnd = new Random();
            return $"Link {rnd.Next(1000, 9999)}";
        }

        public string GetRandomLinkUrl()
        {
            var rnd = new Random();
            return $"_target{rnd.Next(1000, 9999)}";
        }
    }
}
