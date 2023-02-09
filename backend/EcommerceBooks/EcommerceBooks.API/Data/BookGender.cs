using System;
using System.Collections.Generic;

namespace EcommerceBooks.API.Data;

public partial class BookGender
{
    public int Id { get; set; }

    public int BookId { get; set; }

    public int GenderId { get; set; }
}
