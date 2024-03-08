using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

/// <summary>
/// Главная страница сайта
/// </summary>
public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}