using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.Portfolio;

/// <summary>
/// Контурная пластика
/// </summary>
public class ContourPlasticController : Controller
{
    public IActionResult Index(int pageId)
    {
        return View($"{pageId}");
    }
}