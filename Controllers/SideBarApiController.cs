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
            SidebarLinkItemCollection sidebar = new SidebarLinkItemCollection()
            {
                Groups = new SidebarLinkItem[] {
                    new SidebarLinkItem() {
                        Links = new SidebarLinkItem[] {
                            new SidebarLinkItem(){
                                Name="Link A",
                                Url = "http://www.cnn.com",
                                IconProps = new IconProp().RandomIcon()
                            },
                            new SidebarLinkItem(){
                                Name="Link B",
                                Url = "http://www.cnn.com",
                                IconProps = new IconProp().RandomIcon()
                            },
                            new SidebarLinkItem(){
                                Name="Link C",
                                Url = "http://www.cnn.com",
                                IconProps = new IconProp().RandomIcon(),
                                Links = new SidebarLinkItem[]{
                                    new SidebarLinkItem(){
                                        Name="Link C.1",
                                        Url = "http://www.cnn.com",
                                        IconProps = new IconProp().RandomIcon()
                                    },
                                     new SidebarLinkItem(){
                                        Name="Link C.2",
                                        Url = "http://www.cnn.com",
                                        IconProps = new IconProp().RandomIcon()
                                    },
                                }
                            },
                            new SidebarLinkItem(){
                                Name="Link D",
                                Url = "http://www.cnn.com",
                                IconProps = new IconProp().RandomIcon()
                            },
                            new SidebarLinkItem(){
                                Name="Link E",
                                Url = "http://www.cnn.com",
                                IconProps = new IconProp().RandomIcon()
                            },
                            new SidebarLinkItem(){
                                Name="Link F",
                                Url = "http://www.cnn.com",
                                IconProps = new IconProp().RandomIcon()
                            },
                        }
                    }
                }
            };

            return sidebar;
        }
    }
}
