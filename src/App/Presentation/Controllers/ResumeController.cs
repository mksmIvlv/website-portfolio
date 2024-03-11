using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

/// <summary>
/// Контроллер резюме
/// </summary>
public class ResumeController : Controller
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