using EcommerceBooks.API.Data;
using EcommerceBooks.API.Repository;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSqlServer<EcommerceBooksContext>(builder.Configuration.GetConnectionString("BooksDB"));
builder.Services.AddScoped<BooksRepository>();
builder.Services.AddScoped<BookGender>();
builder.Services.AddScoped<Gender>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/books", (EcommerceBooksContext context) => context.Books.ToList());

app.UseHttpsRedirection();


app.Run();
