namespace EcommerceBooks.API.Repository.Base;

public abstract class GenericRepository<T, TContext> : IGenericRepository<T>
    where T : class
    where TContext : DbContext
{
    protected readonly TContext _context;
    protected readonly DbSet<T> _set;
    public GenericRepository(TContext context)
    {
        _context = context;
        _set = context.Set<T>();
    }

    public abstract Task DeleteAsync(int id);

    public async Task<IEnumerable<T>> GetAllAsync()
        => await _set.ToListAsync();

    public async Task<T?> GetAsync(int id)
        => await _set.FindAsync(id);

    public async Task<T> PostAsync(T value)
        => (await _set.AddAsync(value)).Entity;

    public Task PutAsync(T value)
    {
        _set.Update(value);
        return Task.CompletedTask;
    }

    public async Task SaveChangesAsync()
        => await _context.SaveChangesAsync();
    
}
