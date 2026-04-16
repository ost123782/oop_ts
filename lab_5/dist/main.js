"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT', 3000);
    const apiPrefix = configService.get('API_PREFIX', '');
    const swaggerPath = configService.get('SWAGGER_PATH', 'api');
    if (apiPrefix) {
        app.setGlobalPrefix(apiPrefix);
    }
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Lab 5 — Побудова методів')
        .setDescription('REST API для лабораторної роботи №5: обчислення площі трапеції, ' +
        'пошук мінімуму/максимуму, робота з масивами.')
        .setVersion('1.0')
        .addTag('task1', 'Обчислення площі трапеції (Варіант 6)')
        .addTag('task2', 'Найменше з трьох чисел')
        .addTag('task3', 'Виведення масиву')
        .addTag('task4', 'Найбільше число з масиву')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(swaggerPath, app, document);
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`Swagger UI: http://localhost:${port}/${swaggerPath}`);
}
bootstrap();
//# sourceMappingURL=main.js.map