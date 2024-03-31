using Presentation.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Подключение сервисов Presentation
builder.Services.AddPresentation();

var app = builder.Build();

// Подключение компонентов приложения
app.AddPresentation(builder.Environment);

app.Run();