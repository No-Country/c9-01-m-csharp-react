using System;
using System.Collections.Generic;

namespace EcommerceBooks.API.Data;

public partial class Book
{
    public int BookId { get; set; }

    public string Name { get; set; } = null!;

    public string Editorial { get; set; } = null!;

    public string Author { get; set; } = null!;

    public string AuthorCountry { get; set; } = null!;

    public DateTime EditionDate { get; set; }

    public decimal Price { get; set; }

    public string? PhotoUrl { get; set; }
    public virtual ICollection<BookGender> BookGenders { get; set; }
}
