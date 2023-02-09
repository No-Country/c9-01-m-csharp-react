using System;
using System.Collections.Generic;

namespace EcommerceBooks.API.Data;

public partial class Sale
{
    public int SaleId { get; set; }

    public DateTime Date { get; set; }

    public string UserId { get; set; } = null!;
}
