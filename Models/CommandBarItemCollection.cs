using System;
using System.Collections.Generic;

namespace RFShell
{
    public class CommandBarItemCollection
    {
        public CommandBarItemCollection()
        {

        }
        public string Key { get; set; }
        public string Name { get; set; }
        public string AriaLabel { get; set; }
        public CommandBarItem[] Items { get; set; }
    }
}