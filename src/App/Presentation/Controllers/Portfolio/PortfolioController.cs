using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers.Portfolio;

public class PortfolioController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}