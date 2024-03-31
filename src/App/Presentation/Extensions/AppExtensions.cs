using AspNetCore.SEOHelper;
using Microsoft.AspNetCore.Rewrite;

namespace Presentation.Extensions;

/// <summary>
/// Расширение для подключения компонентов приложения
/// </summary>
public static class AppExtensions
{
    /// <summary>
    /// Подключение компонентов приложения
    /// </summary>
    public static WebApplication AddPresentation(this WebApplication app, IWebHostEnvironment env)
    {
        // Подключение марщрутизации
        app.UseRouting();

        // Подключение страниц razor
        app.MapRazorPages();
        
        // Подключение компрессии
        app.UseResponseCompression();

        // Подключение статических файлов
        app.UseStaticFiles();
        
        // Маршрутизация sitemap.xml
        app.UseXMLSitemap(env.ContentRootPath);
        
        // Маршрутизация robots.txt
        app.UseRobotsTxt(env.ContentRootPath);
        
        // Маршрутизация favicon
        app.UseRewriter(new RewriteOptions().AddRedirect("favicon.ico", "images/favicon.ico"));

        // Обработка ошибок HTTP
        app.UseStatusCodePagesWithRedirects("/Error/NotFound");

        // Основная маршрутизация
        app.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}");
        
        return app;
    }
}