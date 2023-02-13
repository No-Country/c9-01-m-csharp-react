﻿using EcommerceBooks.API.Extensions;

namespace EcommerceBooks.API.Routes;

public static class BooksRoutes
{
    public static IEndpointRouteBuilder AddBooksRoutes(this IEndpointRouteBuilder app)
    {
        app.MapGet("/books", GetBooks).WithTags("Books");
        app.MapGet("/books/{id}", GetBookById).WithTags("Books");
        app.MapPost("/books", PostBook).WithTags("Books");
        //app.MapPut("/books/{id}", PutBook).WithTags("Books");
        //app.MapDelete("/books/{id}", DeleteBook).WithTags("Books");

        return app;

        async Task<IResult> GetBooks(BooksRepository repository)
            => Results.Ok((await repository.GetAllAsync()).ToBooksDTO());

        async Task<IResult> GetBookById(BooksRepository repository, int id)
        {
            Book? book = await repository.GetAsync(id);
            return book is null ? Results.NotFound() : Results.Ok(book.ToBookDTO());
        }

        async Task<IResult> PostBook(BooksRepository repository, NewBookDTO newBook)
        {
            var book = await repository.PostAsync(newBook.ToBook());
            await repository.SaveChangesAsync();
            return Results.Ok(book.ToBookDTO());
        }
    }
}
