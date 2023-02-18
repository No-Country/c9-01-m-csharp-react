using Microsoft.AspNetCore.Authorization;

namespace EcommerceBooks.API.Routes
{
    public static class BookGenderRoutes
    {
        public static IEndpointRouteBuilder AddBookGendersRoutes(this IEndpointRouteBuilder app)
        {
            //app.MapGet("/bookGender", GetBookGenders).WithTags("BookGenders");
            app.MapGet("/bookGender/gender/{id}", GetBookGenderByGenderId).WithTags("BookGenders");
            app.MapGet("/bookGender/book/{id}", GetBookGenderByIdBookId).WithTags("BookGenders");
            app.MapPost("/bookGender", PostBookGender).WithTags("BookGenders");
            app.MapDelete("/bookGender/{id}", DeleteBookGender).WithTags("BookGenders");
            return app;

            [Authorize]
            async Task<IResult> GetBookGenderByGenderId(BookGenderRepository repository, int id)
            {
                IEnumerable<BookGender> bookGenders = (await repository.GetAllAsync()).Where(bg => bg.GenderId == id);

                if(bookGenders is not null)
                {
                    return Results.Ok(bookGenders.ToBooksGenders());
                }
                else
                    return Results.NotFound();
            }

            [Authorize]
            async Task<IResult> GetBookGenderByIdBookId(BookGenderRepository repository, int id)
            {
                IEnumerable<BookGender> bookGenders = (await repository.GetAllAsync()).Where(bg => bg.BookId == id);

                if (bookGenders is not null)
                {
                    return Results.Ok(bookGenders.ToBooksGenders());
                }
                else
                    return Results.NotFound();
            }

            [Authorize]
            async Task<IResult> PostBookGender(BookGenderRepository repository, NewBookGenderDTO newBookGenderDTO)
            {
                var bookGender = await repository.PostAsync(newBookGenderDTO.ToBookGender());

                if(bookGender is not null)
                {
                    await repository.SaveChangesAsync();
                    return Results.Ok(bookGender.ToBookGenderDTO());
                }
                else
                    return Results.NotFound();
                
            }

            [Authorize("IsAdmin")]
            async Task<IResult> DeleteBookGender(BookGenderRepository repository, int id)
            {
                var existingBookGender = await repository.GetAsync(id);

                if(existingBookGender is not null)
                {
                    await repository.DeleteAsync(id);
                    await repository.SaveChangesAsync();
                    return Results.Ok();
                }
                else
                    return Results.NotFound();
            }
        }
    }
}
