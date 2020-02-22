using System;
namespace RFShell
{
    public class SidebarLink
    {
        public SidebarLink()
        {
            IsExpanded = false;
        }
        public string Key { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public bool IsExpanded { get; set; }
        public IconProp IconProps { get; set; }
        public string IconClassName { get; set; }
        public SidebarLink[] Links { get; set; }
    }
}
