namespace EcommerceBooks.API.Repository;

public class BooksRepository : GenericRepository<Book, EcommerceBooksContext>
{
    public BooksRepository(EcommerceBooksContext context) : base(context)
    {
    }

    public override Task DeleteAsync(int id)
    {
        var book = _set
            .Include(b => b.BookGenders)
            .SingleOrDefault(b => b.BookId == id);

        if (book is not null)
            _set.Remove(book);
        return Task.CompletedTask;
    }
}
