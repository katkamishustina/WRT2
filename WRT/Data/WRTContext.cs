using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WRT.Models;

namespace WRT.Data
{
    public class WRTContext : DbContext
    {
        public WRTContext (DbContextOptions<WRTContext> options)
            : base(options)
        {
        }

        public DbSet<WRT.Models.Notes> Notes { get; set; } = default!;
    }
}
