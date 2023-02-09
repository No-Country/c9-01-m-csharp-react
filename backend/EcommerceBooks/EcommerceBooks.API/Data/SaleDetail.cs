using System;
using System.Collections.Generic;

namespace EcommerceBooks.API.Data;

public partial class SaleDetail
{
    public int Id { get; set; }

    public int SaleId { get; set; }

    public int BookId { get; set; }

    public string Description { get; set; } = null!;

    public decimal Price { get; set; }

    public double DiscountPercentage { get; set; }

    public double TaxPercentage { get; set; }
}
