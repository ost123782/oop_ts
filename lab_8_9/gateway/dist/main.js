"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({ origin: true, credentials: true });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    const swaggerPath = process.env.SWAGGER_PATH ?? 'api';
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Lab 8 + 9 Gateway')
        .setDescription('HTTP + WebSocket API for Lab 8 (file I/O) and Lab 9 (formulas)')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(swaggerPath, app, document);
    const port = Number(process.env.PORT ?? 3000);
    await app.listen(port);
    console.log(`gateway listening on http://localhost:${port}`);
    console.log(`swagger:    http://localhost:${port}/${swaggerPath}`);
}
void bootstrap();
//# sourceMappingURL=main.js.map