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
        public SidebarRoot Get()
        {
            return new SidebarRoot()
            {
                Groups = GetSidebarLinksCollection(),
            };
        }

        public SidebarGroup[] GetSidebarLinksCollection()
        {
            return new SidebarGroup[] { GetRandomGroup() };
        }

        private SidebarGroup GetRandomGroup()
        {
            return new SidebarGroup()
            {
                Links = GetRandomLinks()
            };
        }

        public SidebarLink[] GetRandomLinks()
        {
            return new SidebarLink[] {
                GetRandomChevronLink(),
                GetRandomTopLink(),
                GetRandomTopLink(),
                GetRandomChevronLink(),
                GetRandomChevronLink()
                };
        }

        public SidebarLink GetRandomTopLink()
        {
            var rnd = new Random();
            return new SidebarLink()
            {
                Key = rnd.Next(1, 999999999).ToString(),
                Name = GetRandomLinkName(),
                Url = GetRandomLinkUrl(),
                IconProps = new IconProp().RandomIcon(),
            };
        }

        public SidebarLink GetRandomChevronLink()
        {
            var rnd = new Random();
            return new SidebarLink()
            {
                Key = rnd.Next(1, 999999999).ToString(),
                Name = GetRandomLinkName(),
                Url = GetRandomLinkUrl(),
                Links = GetRandomTopLinks(),
                IsExpanded = false
            };
        }

        public SidebarLink[] GetRandomTopLinks()
        {
            var rnd = new Random();
            return Enumerable.Range(5, rnd.Next(6, 10)).Select(index => GetRandomTopLink()).ToArray();
        }

        public string GetRandomLinkName()
        {
            var rnd = new Random();
            return $"Link {rnd.Next(1000, 9999)}";
        }

        public string GetRandomLinkUrl()
        {
            var rnd = new Random();
            return ""; //$"_target{rnd.Next(1000, 9999)}";
        }
    }
}
