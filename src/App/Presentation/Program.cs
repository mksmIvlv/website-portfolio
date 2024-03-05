var builder = WebApplication.CreateBuilder(args);

// Поддержка контроллеров MVC
builder.Services.AddControllersWithViews();

builder.Services.AddRazorPages();






var app = builder.Build();

//app.UseAuthorization();
app.UseRouting();

app.MapRazorPages();

// Подключение статических файлов
app.UseStaticFiles();

app.MapControllerRoute(
   name: "default",
   pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();