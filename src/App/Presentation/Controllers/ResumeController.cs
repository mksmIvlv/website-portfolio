using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

/// <summary>
/// Главная страница
/// </summary>
public class ResumeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}