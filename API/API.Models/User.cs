﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace API.Models
{
    public class User
    {
        public string Name { get; set; }

        public string Password { get; set; }

        public string ConfirmPassword { get; set; }
    }
}
