using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.Portfolio;

/// <summary>
/// Ботулинотерапия
/// </summary>
public class BotoxController : Controller
{
    public IActionResult Index(int pageId)
    {
        return View($"{pageId}");
    }
}