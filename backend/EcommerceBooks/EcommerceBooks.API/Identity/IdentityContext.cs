using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace EcommerceBooks.API.Identity;

public class IdentityContext : IdentityDbContext<ApplicationUser>
{
    public IdentityContext(DbContextOptions options) : base(options)
    {

    }
}
