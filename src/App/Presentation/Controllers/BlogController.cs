using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

/// <summary>
/// Контроллер страницы блога
/// </summary>
public class BlogController : Controller
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