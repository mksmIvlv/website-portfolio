using Presentation.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Подключение сервисов Presentation
builder.Services.AddPresentation();

var app = builder.Build();

app.UseRouting();

app.MapRazorPages();

// Подключение статических файлов
app.UseStaticFiles();

app.MapControllerRoute(
   name: "default",
   pattern: "{controller=Home}/{action=Index}");

app.Run();