using EcommerceBooks.API.Data;
using EcommerceBooks.API.Repository;
using EcommerceBooks.API.Routes;

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

//Registrar todas las rutas
app.AddBooksRoutes();

app.UseHttpsRedirection();


app.Run();
