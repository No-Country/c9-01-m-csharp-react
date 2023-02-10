namespace EcommerceBooks.API.Repository.Base;

public interface IGenericRepository<T> 
    where T : class
{
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> GetAsync(int id);
    Task<T> PostAsync(T value);
    Task PutAsync(T value);
    Task DeleteAsync(int id);
    Task SaveChangesAsync();
}
