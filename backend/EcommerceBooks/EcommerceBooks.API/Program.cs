using EcommerceBooks.API.Data;
using EcommerceBooks.API.Identity;
using EcommerceBooks.API.Repository;
using EcommerceBooks.API.Routes;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Books API", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please insert a JWT with bearer",
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });
    c.AddSecurityRequirement(
        new OpenApiSecurityRequirement
        {
                        {
                            new OpenApiSecurityScheme
                            {
                                Reference = new OpenApiReference
                                {
                                    Type = ReferenceType.SecurityScheme,
                                    Id = "Bearer"
                                }
                            },
                            Array.Empty<string>()
                        }
        });
});
builder.Services.AddSqlServer<EcommerceBooksContext>(builder.Configuration.GetConnectionString("BooksDB"));
builder.Services.AddSqlServer<IdentityContext>(builder.Configuration.GetConnectionString("IdentityDB"));
builder.Services.AddScoped<BooksRepository>();
builder.Services.AddScoped<BookGenderRepository>();
builder.Services.AddScoped<GenderRepository>();
builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection(JwtOptions.Jwt));
builder.Services.AddScoped<UserManagement>();


builder.Services.AddIdentityCore<ApplicationUser>(
    options =>
    {
        options.Password.RequiredLength = 8;
        options.Password.RequireUppercase = true;
        options.Password.RequireNonAlphanumeric = true;
        options.Password.RequireDigit = true;
        options.Lockout.MaxFailedAccessAttempts = 5;
        options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(1);
    }
    ).AddEntityFrameworkStores<IdentityContext>();

JwtOptions jwtOptions = builder.Configuration.GetSection(JwtOptions.Jwt).Get<JwtOptions>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, options =>
    {
        options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtOptions.Key)),
            ValidateAudience = true,
            ValidateIssuer = true,
            ValidateLifetime = true,
            ValidAudience = jwtOptions.Audience,
            ValidIssuer = jwtOptions.Issuer
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("IsAdmin", policyBuilder => policyBuilder.RequireClaim("IsAdmin", true.ToString()));
});

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
app.AddAuthentication();

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();


app.Run();
