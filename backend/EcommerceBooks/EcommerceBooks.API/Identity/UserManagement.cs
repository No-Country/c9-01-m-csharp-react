using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EcommerceBooks.API.Identity;

public class UserManagement
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly JwtOptions _jwtOptions;
    public UserManagement(UserManager<ApplicationUser> userManager, IOptions<JwtOptions> options)
        => (_userManager, _jwtOptions) = (userManager,options.Value);

    public async Task<string> GenerateJwtAsync(ApplicationUser applicationUser)
    {
        var key = Encoding.ASCII.GetBytes(_jwtOptions.Key);
        var claims = await _userManager.GetClaimsAsync(applicationUser);
        claims.Add(new("Id", applicationUser.Id));

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Issuer = _jwtOptions.Issuer,
            Audience = _jwtOptions.Audience,
            Expires = DateTime.UtcNow.Add(TimeSpan.FromHours(_jwtOptions.ExpirationInHours)),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
            SecurityAlgorithms.HmacSha256Signature),
            Subject = new(claims)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }

    public async Task<(bool created, IEnumerable<string> errors)> CreateUserAsync(NewUserDTO user, bool isAdmin)
    {
        ApplicationUser newUser = new()
        {
            Address = user.Address,
            UserName = user.UserName,
            Email = user.Email,
            PhoneNumber = user.PhoneNumber
        };

        var created = await _userManager.CreateAsync(newUser, user.Password);

        if (created.Succeeded)
        {
            Claim adminClaim = new("IsAdmin", isAdmin.ToString());
            await _userManager.AddClaimAsync(newUser, adminClaim);
            return (true, null!);
        }
            
        else
            return (false, created.Errors.Select(e => e.Description));
    }

    public async Task<(bool success, ApplicationUser user, string error)> ValidateUserCredentialAsync(LoginCredentialsDTO loginCredentialsDTO)
    {
        var applicationUser = await _userManager.FindByNameAsync(loginCredentialsDTO.UserName);

        if(applicationUser is not null)
        {
            var succeded = await _userManager.CheckPasswordAsync(applicationUser, loginCredentialsDTO.Password);

            //var success = _userManager.PasswordHasher.VerifyHashedPassword(applicationUser, 
            //    applicationUser.PasswordHash, loginCredentialsDTO.Password);

            return succeded 
                ? (true, applicationUser, null!)
                : (false, null!, "Usuario o contraseña incorrectos");
        }
        else
            return (false, null!, "Usuario o contraseña incorrectos");
    }
}
