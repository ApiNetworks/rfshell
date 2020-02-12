using System;
namespace RFShell
{
    public class MenuSidebar 
    {
        public MenuSidebar()
        {
            Groups = new MenuGroup[] { };
        }
        public MenuGroup[] Groups { get; set; }
    }
}
