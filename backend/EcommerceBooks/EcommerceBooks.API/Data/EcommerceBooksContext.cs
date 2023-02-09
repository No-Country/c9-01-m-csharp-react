using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EcommerceBooks.API.Data;

public partial class EcommerceBooksContext : DbContext
{
    public EcommerceBooksContext()
    {
    }

    public EcommerceBooksContext(DbContextOptions<EcommerceBooksContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Book> Books { get; set; }

    public virtual DbSet<BookGender> BookGenders { get; set; }

    public virtual DbSet<Coupon> Coupons { get; set; }

    public virtual DbSet<Gender> Genders { get; set; }

    public virtual DbSet<Sale> Sales { get; set; }

    public virtual DbSet<SaleDetail> SaleDetails { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Book>(entity =>
        {
            entity.ToTable("Book");

            entity.Property(e => e.Author).HasMaxLength(50);
            entity.Property(e => e.AuthorCountry).HasMaxLength(20);
            entity.Property(e => e.EditionDate).HasColumnType("datetime");
            entity.Property(e => e.Editorial).HasMaxLength(100);
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Price).HasColumnType("money");
        });

        modelBuilder.Entity<BookGender>(entity =>
        {
            entity.ToTable("BookGender");
        });

        modelBuilder.Entity<Coupon>(entity =>
        {
            entity.ToTable("Coupon");

            entity.Property(e => e.Description).HasMaxLength(200);
        });

        modelBuilder.Entity<Gender>(entity =>
        {
            entity.ToTable("Gender");

            entity.Property(e => e.Name).HasMaxLength(20);
        });

        modelBuilder.Entity<Sale>(entity =>
        {
            entity.ToTable("Sale");

            entity.Property(e => e.Date).HasColumnType("datetime");
        });

        modelBuilder.Entity<SaleDetail>(entity =>
        {
            entity.ToTable("SaleDetail");

            entity.Property(e => e.Description).HasMaxLength(100);
            entity.Property(e => e.Price).HasColumnType("money");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
