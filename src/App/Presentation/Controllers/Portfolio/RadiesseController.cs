using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.Portfolio;

/// <summary>
/// Векторный лифтинг
/// </summary>
public class RadiesseController : Controller
{
    public IActionResult Index(int pageId)
    {
        return View($"{pageId}");
    }
}