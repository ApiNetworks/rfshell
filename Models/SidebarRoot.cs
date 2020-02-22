using System;
namespace RFShell
{
    public class SidebarRoot
    {
        public SidebarRoot()
        {
            Groups = new SidebarGroup[] { };
        }
        public SidebarGroup[] Groups { get; set; }
    }
}
