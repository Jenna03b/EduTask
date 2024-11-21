using EduTask.Api.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Dodajemy konfiguracjê CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:4200")  // Adres frontendowej aplikacji (Angular)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Rejestracja us³ug kontrolerów
builder.Services.AddControllers();

// Rejestracja DbContext z SQL Server
builder.Services.AddDbContext<EduTaskDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Rejestracja Swaggera
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// W³¹czenie Swaggera tylko w trybie deweloperskim
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Konfiguracja CORS, ¿eby aplikacja frontendowa mog³a wysy³aæ ¿¹dania
app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

// Autoryzacja (jeœli jest w³¹czona)
app.UseAuthorization();

// Mapowanie kontrolerów
app.MapControllers();

// Uruchomienie aplikacji
app.Run();
