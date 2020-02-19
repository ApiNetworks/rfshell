using System;
namespace RFShell
{
    public class SidebarLinkItemCollection
    {
        public SidebarLinkItemCollection()
        {
            Groups = new SidebarLinkItem[] { };
        }
        public SidebarLinkItem[] Groups { get; set; }
    }
}
