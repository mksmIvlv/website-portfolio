using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

/// <summary>
/// Контроллер портфолио
/// </summary>
public class PortfolioController : Controller
{
    /// <summary>
    /// Главная страница
    /// </summary>
    /// <returns>Вью</returns>
    public IActionResult Index()
    {
        return View();
    }
    
    /// <summary>
    /// Страница с описанием векторного лифтинга
    /// </summary>
    /// <param name="page">Название страницы</param>
    /// <returns>Вью</returns>
    public IActionResult Radiesse(string page)
    {
        return View($"{page}");
    }
    
    /// <summary>
    /// Страница с описанием ботулинотерапией
    /// </summary>
    /// <param name="page">Название страницы</param>
    /// <returns>Вью</returns>
    public IActionResult Botox(string page)
    {
        return View($"{page}");
    }
    
    /// <summary>
    /// Страница с описанием фотоомоложением
    /// </summary>
    /// <param name="page">Название страницы</param>
    /// <returns>Вью</returns>
    public IActionResult Photorejuvenation(string page)
    {
        return View($"{page}");
    }
}