using System;
using System.Collections.Generic;

namespace EcommerceBooks.API.Data;

public partial class BookGender
{
    public int Id { get; set; }

    public int BookId { get; set; }

    public int GenderId { get; set; }
    public virtual Book Book { get; set; } = null!;
    public virtual Gender Gender { get; set; } = null!;
}
