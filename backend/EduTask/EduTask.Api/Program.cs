using EduTask.Api.Models;
using EduTask.Api.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Dodajemy konfiguracj� CORS, aby zezwoli� na po��czenie z frontendem (Angular)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:4200")  // Adres aplikacji frontendowej (Angular)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Rejestracja us�ug kontroler�w
builder.Services.AddControllers()
    .AddJsonOptions(options =>
        {
            options.JsonSerializerOptions.Converters.Add(new System.Text.Json.Serialization.JsonStringEnumConverter());
        });

// Rejestracja DbContext z SQL Server
builder.Services.AddDbContext<EduTaskDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Rejestracja serwisu ActivityService
builder.Services.AddScoped<ActivityService>();

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

// Obs�uguje przekierowanie HTTP na HTTPS
app.UseHttpsRedirection();

// W��czenie autoryzacji (je�li jest w��czona)
app.UseAuthorization();

// Mapowanie kontroler�w
app.MapControllers();

// Uruchomienie aplikacji
app.Run();
