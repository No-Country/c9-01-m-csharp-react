using EcommerceBooks.API.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSqlServer<EcommerceBooksContext>(builder.Configuration.GetConnectionString("BooksDB"));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/books", (EcommerceBooksContext context) => context.Books.ToList());

app.UseHttpsRedirection();


app.Run();
