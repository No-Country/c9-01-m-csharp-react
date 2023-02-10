namespace EcommerceBooks.API.Repository;

public class BookGenderRepository : GenericRepository<BookGender, EcommerceBooksContext>
{
    public BookGenderRepository(EcommerceBooksContext context) : base(context)
    {
    }

    public override async Task DeleteAsync(int id)
    {
        var bookGender = await _set.FindAsync(id);
        if(bookGender is not null)
            _set.Remove(bookGender);
    }
}
