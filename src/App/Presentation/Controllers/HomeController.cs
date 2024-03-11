using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

/// <summary>
/// Контроллер главной страницы сайта
/// </summary>
public class HomeController : Controller
{
    /// <summary>
    /// Главная страница
    /// </summary>
    /// <returns>Вью</returns>
    public IActionResult Index()
    {
        return View();
    }
}