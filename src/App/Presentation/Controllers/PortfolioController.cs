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
    
    public IActionResult Radiesse(string page)
    {
        return View($"{page}");
    }
    
    public IActionResult Botox(string page)
    {
        return View($"{page}");
    }
    
    public IActionResult Photorejuvenation(string page)
    {
        return View($"{page}");
    }
}