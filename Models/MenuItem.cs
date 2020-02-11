using System;
namespace RFShell
{
    public class MenuItem
    {
        public string Key { get; set; }
        public string Name { get; set; }
        public bool CanCheck { get; set; }
        public bool Checked { get; set; }
    }
}
