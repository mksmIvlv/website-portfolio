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
        
        return services;
    }
}