using System;
namespace RFShell
{
    public class SidebarLinkItem
    {
        public SidebarLinkItem()
        {

        }
        public string Name { get; set; }
        public string Url { get; set; }
        public bool isExpanded { get; set; }
        public IconProp IconProps { get; set; }
        public string IconClassName { get; set; }
        public SidebarLinkItem[] Links { get; set; }
    }
}
