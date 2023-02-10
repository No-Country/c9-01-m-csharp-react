using System;
using System.Collections.Generic;

namespace EcommerceBooks.API.Data;

public partial class Coupon
{
    public int CouponId { get; set; }

    public string UserId { get; set; } = null!;

    public string Description { get; set; } = null!;
}
