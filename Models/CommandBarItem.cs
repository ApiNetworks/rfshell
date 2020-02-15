using System;
namespace RFShell
{
    public class CommandBarItem
    {
        public string Key { get; set; }
        public string Name { get; set; }
        public IconProp IconProps { get; set; }
        public bool CanCheck { get; set; }
        public bool Checked { get; set; }
        public CommandBarItemCollection SubMenuProps { get; set; }
    }
}
