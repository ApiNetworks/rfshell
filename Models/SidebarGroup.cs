using System;
namespace RFShell
{
    public class SidebarGroup
    {
        public SidebarGroup()
        {
            Links = new SidebarLink[] { };
        }
        public SidebarLink[] Links { get; set; }
    }
}
