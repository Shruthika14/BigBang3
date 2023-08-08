
using bigbang3api.repositories.interfaces;
using Bigbang3API.Data;
using Bigbang3API.Repositories;
using Bigbang3API.Repositories.Interfaces;
using Bigbang3API.Repositories.Services;
using Bigbang3API.Repository.Interface;
using Bigbang3API.Repository.Service;
using Bigbang3API.Services;

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IUser,UserServices>();
builder.Services.AddScoped<IPackage, PackageService>();
builder.Services.AddScoped<IBookingServices, BookingServices>();
builder.Services.AddScoped<IGallery,ImageService>();
builder.Services.AddCors(opts =>
{
    opts.AddPolicy("CORS", options =>
    {
        options.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
    });
});
builder.Services.AddDbContext<TouristDbContext>(optionsAction: options => options.UseSqlServer(builder.Configuration.GetConnectionString(name: "SQLConnection")));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors("CORS");

app.UseAuthorization();

app.MapControllers();

app.Run();
