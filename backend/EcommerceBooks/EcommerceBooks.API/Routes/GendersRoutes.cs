namespace EcommerceBooks.API.Routes;

public static class GendersRoutes
{
    public static IEndpointRouteBuilder AddGendersRoutes(this IEndpointRouteBuilder app)
    {
        app.MapGet("/genders", GetGenders).WithTags("Genders");
        app.MapGet("/genders/{id}", GetGenderById).WithTags("Genders");
        app.MapPost("/genders", PostGender).WithTags("Genders");
        app.MapPut("/genders/{id}", PutGender).WithTags("Genders");
        app.MapDelete("/genders/{id}", DeleteGender).WithTags("Genders");

        return app;

        async Task<IResult> GetGenders(GenderRepository repository)
            => Results.Ok((await repository.GetAllAsync()).ToGendersDTO());

        async Task<IResult> GetGenderById(GenderRepository repository, int id)
        {
            Gender? gender = await repository.GetAsync(id);
            return gender is null ? Results.NotFound() : Results.Ok(gender.ToGenderDTO());
        }

        async Task<IResult> PostGender(GenderRepository repository, NewGenderDTO newGender)
        {
            var gender = await repository.PostAsync(newGender.ToGender());
            await repository.SaveChangesAsync();
            return Results.Ok(gender.ToGenderDTO());
        }

        async Task<IResult> PutGender(GenderRepository repository, int id, NewGenderDTO newGenderDTO)
        {
            var existingGender = await repository.GetAsync(id);

            if(existingGender is not null)
            {
                existingGender.Name = newGenderDTO.Name;

                await repository.PutAsync(existingGender);
                await repository.SaveChangesAsync();
                return Results.Ok();
            }
            else
            {
                return Results.NotFound();
            }
        }

        async Task<IResult> DeleteGender(GenderRepository repository, int id)
        {
            var existingGender = await repository.GetAsync(id);

            if(existingGender is not null) 
            {
                await repository.DeleteAsync(id);
                await repository.SaveChangesAsync();
                return Results.Ok();
            }
            else
            {
                return Results.NotFound();
            }
        }
    }
}
