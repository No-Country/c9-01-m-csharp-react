using EcommerceBooks.API.Identity;
using NuGet.Protocol.Plugins;

namespace EcommerceBooks.API.Routes;

public static class AuthenticationRoutes
{
    public static IEndpointRouteBuilder AddAuthentication(this IEndpointRouteBuilder app)
    {
        app.MapPost("/aut/login", Login).WithTags("Auth");
        app.MapPost("/aut/register", Register).WithTags("Auth");
        app.MapPost("/aut/registerAdmin", RegisterAdmin).WithTags("Auth");

        return app;

        async Task<IResult> Register(UserManagement userManagement, NewUserDTO newUserDTO)
        {
            var (created, error) = await userManagement.CreateUserAsync(newUserDTO, false);

            if (created)
                return Results.Ok();
            else
                return Results.BadRequest(error);
        }

        async Task<IResult> RegisterAdmin(UserManagement userManagement, NewUserDTO newUserDTO)
        {
            var (created, error) = await userManagement.CreateUserAsync(newUserDTO, true);

            if (created)
                return Results.Ok();
            else
                return Results.BadRequest(error);
        }

        async Task<IResult> Login(UserManagement userManagement, LoginCredentialsDTO loginCredentialsDTO)
        {
            var (success, user, error) = await userManagement.ValidateUserCredentialAsync(loginCredentialsDTO);

            if(success)
                return Results.Ok(await userManagement.GenerateJwtAsync(user));
            else
                return Results.BadRequest(error);
        }
    }
}
