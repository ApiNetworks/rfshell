using System;
namespace RFShell
{
    public class MenuGroup
    {
        public MenuGroup()
        {
            Links = new MenuLink[] { };
        }
        public MenuLink[] Links { get; set; }
    }
}
