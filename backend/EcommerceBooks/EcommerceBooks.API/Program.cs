using EcommerceBooks.API.Data;
using EcommerceBooks.API.Repository;
using EcommerceBooks.API.Routes;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSqlServer<EcommerceBooksContext>(builder.Configuration.GetConnectionString("BooksDB"));
builder.Services.AddScoped<BooksRepository>();
builder.Services.AddScoped<BookGenderRepository>();
builder.Services.AddScoped<GenderRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//Registrar todas las rutas
app.AddBooksRoutes();
app.AddBookGendersRoutes();
app.AddGendersRoutes();

app.UseHttpsRedirection();


app.Run();
