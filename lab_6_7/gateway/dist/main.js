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
    const swaggerPath = configService.get('SWAGGER_PATH', 'api');
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Lab 6/7 Gateway')
        .setDescription('API Gateway для мікросервісів Lab 6 (ООП) та Lab 7 (Колекції). ' +
        'Запити передаються сервісам через RabbitMQ.')
        .setVersion('1.0')
        .addTag('lab6/person', 'Клас Person')
        .addTag('lab6/phone', 'Клас Phone')
        .addTag('lab6/car', 'Ієрархія Car (Sedan / Truck)')
        .addTag('lab6/library-card', 'Бібліотечна картка (варіант 6) + спадкоємець')
        .addTag('lab7/taxi', 'Сервіс таксі — колекція автомобілів')
        .addTag('lab7/phonebook', 'Телефонна книга (HashMap)')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(swaggerPath, app, document);
    await app.listen(port);
    console.log(`Gateway is running on: http://localhost:${port}`);
    console.log(`Swagger UI: http://localhost:${port}/${swaggerPath}`);
}
void bootstrap();
//# sourceMappingURL=main.js.map