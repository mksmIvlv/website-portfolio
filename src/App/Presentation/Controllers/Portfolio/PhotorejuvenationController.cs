using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.Portfolio;

/// <summary>
/// Фотоомоложение
/// </summary>
public class PhotorejuvenationController : Controller
{
    public IActionResult Index(int pageId)
    {
        return View($"{pageId}");
    }
}