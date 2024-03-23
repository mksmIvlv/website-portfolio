using System.IO.Compression;
using Microsoft.AspNetCore.ResponseCompression;

namespace Presentation.Extensions;

/// <summary>
/// Расширение для подключения сервисов
/// </summary>
public static class ServiceCollectionExtensions
{
    /// <summary>
    /// Подключение сервисов
    /// </summary>
    public static IServiceCollection AddPresentation(this IServiceCollection services)
    {
        // Поддержка контроллеров MVC
        services.AddControllersWithViews();
        // Подключения сервисов Razor Pages
        services.AddRazorPages();
        // Подключение компрессии
        services.AddResponseCompression(options=>
        {
            options.EnableForHttps = true;
            // добавляем провайдеры сжатия
            options.Providers.Add<GzipCompressionProvider>();
            options.Providers.Add<BrotliCompressionProvider>();
        });
        // Настройки gzip-сжатия
        services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
        // Настройки brotli-сжатия
        services.Configure<BrotliCompressionProviderOptions>(options => options.Level = CompressionLevel.Optimal);
        
        return services;
    }
}