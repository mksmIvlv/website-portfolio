using Microsoft.AspNetCore.Rewrite;
using Presentation.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Подключение сервисов Presentation
builder.Services.AddPresentation();

var app = builder.Build();

app.UseRouting();

app.MapRazorPages();

// Подключение статических файлов
app.UseStaticFiles();

// Подключение компрессии
app.UseResponseCompression();

// Обработка ошибок HTTP
app.UseStatusCodePagesWithRedirects("/Error/NotFound");

// Основная маршрутизация
app.MapControllerRoute(
   name: "default",
   pattern: "{controller=Home}/{action=Index}");

// Маршрутизация favicon
app.UseRewriter(new RewriteOptions().AddRedirect("favicon.ico", "images/favicon.ico"));

app.Run();