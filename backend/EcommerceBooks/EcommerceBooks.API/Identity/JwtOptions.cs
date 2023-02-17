namespace EcommerceBooks.API.Identity;

public class JwtOptions
{
    public const string Jwt = "Jwt";
    public string Key { get; set; }
    public string Issuer { get; set; }
    public string Audience { get; set; }
    public int ExpirationInHours { get; set; }
}
