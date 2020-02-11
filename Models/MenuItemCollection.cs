using System;
using System.Collections.Generic;

namespace RFShell
{
    public class MenuItemCollection
    {
        public MenuItemCollection()
        {
            this.Items = new MenuItem[] { };
        }
        public string Key { get; set; }
        public string Name { get; set; }
        public string AriaLabel { get; set; }
        public MenuItem[] Items { get; set; }
    }
}