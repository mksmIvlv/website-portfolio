using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers;

/// <summary>
/// Контроллер обработки ошибок
/// </summary>
public class ErrorController : Controller
{
    /// <summary>
    /// Страница не найдена
    /// </summary>
    /// <returns>Вью</returns>
    public IActionResult NotFound()
    {
        Response.StatusCode = 404;
        return View();
    }
}