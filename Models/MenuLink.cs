using System;
namespace RFShell
{
    public class MenuLink
    {
        public MenuLink()
        {
            Links = new MenuLink[] { };
        }
        public string Name { get; set; }
        public string Url { get; set; }
        public bool isExpanded { get; set; }
        public MenuLink[] Links { get; set; }
    }
}
