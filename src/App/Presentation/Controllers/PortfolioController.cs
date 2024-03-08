using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

/// <summary>
/// Главная страница
/// </summary>
public class PortfolioController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}