namespace EcommerceBooks.API.Extensions;

public static class DtoConverters
{
    public static BookDTO ToBookDTO(this Book book)
        => new(book.BookId, book.Name, book.Editorial, book.Author, 
            book.AuthorCountry, book.EditionDate, book.Price, book.PhotoUrl);

    public static IEnumerable<BookDTO> ToBooksDTO(this IEnumerable<Book> books)
        => books.Select(b => b.ToBookDTO());

    public static Book ToBook(this NewBookDTO newBookDTO)
        => new()
        {
            Author = newBookDTO.Author,
            AuthorCountry = newBookDTO.AuthorCountry,
            EditionDate = newBookDTO.EditionDate,
            Price = newBookDTO.Price,
            PhotoUrl = newBookDTO.PhotoUrl,
            Editorial = newBookDTO.Editorial,
            Name = newBookDTO.Name
        };

    public static Book ToBook(this BookDTO BookDTO)
        => new()
        {
            Author = BookDTO.Author,
            AuthorCountry = BookDTO.AuthorCountry,
            EditionDate = BookDTO.EditionDate,
            Price = BookDTO.Price,
            PhotoUrl = BookDTO.PhotoUrl,
            Editorial = BookDTO.Editorial,
            Name = BookDTO.Name,
            BookId = BookDTO.Id
        };
}
