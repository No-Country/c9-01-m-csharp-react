namespace EcommerceBooks.API.Repository;

public class GenderRepository : GenericRepository<Gender, EcommerceBooksContext>
{
    public GenderRepository(EcommerceBooksContext context) : base(context)
    {
    }

    public async override Task DeleteAsync(int id)
    {
        var gender = await _set
            .Include(g => g.BookGenders)
            .SingleOrDefaultAsync(g => g.GenderId == id);
        if (gender is not null)
            _set.Remove(gender);
    }
}
