using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.Portfolio;

public class LipsController : Controller
{
    public IActionResult Index(string? viewName)
    {
        return View($"{viewName}");
    }
}