using EduTask.Api.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Dodajemy konfiguracj� CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:4200")  // Adres frontendowej aplikacji (Angular)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Rejestracja us�ug kontroler�w
builder.Services.AddControllers();

// Rejestracja DbContext z SQL Server
builder.Services.AddDbContext<EduTaskDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Rejestracja Swaggera
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// W��czenie Swaggera tylko w trybie deweloperskim
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Konfiguracja CORS, �eby aplikacja frontendowa mog�a wysy�a� ��dania
app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

// Autoryzacja (je�li jest w��czona)
app.UseAuthorization();

// Mapowanie kontroler�w
app.MapControllers();

// Uruchomienie aplikacji
app.Run();
