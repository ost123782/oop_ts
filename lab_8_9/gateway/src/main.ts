import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true, credentials: true });
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true }),
  );

  const swaggerPath = process.env.SWAGGER_PATH ?? 'api';
  const config = new DocumentBuilder()
    .setTitle('Lab 8 + 9 Gateway')
    .setDescription('HTTP + WebSocket API for Lab 8 (file I/O) and Lab 9 (formulas)')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPath, app, document);

  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port);
  console.log(`gateway listening on http://localhost:${port}`);
  console.log(`swagger:    http://localhost:${port}/${swaggerPath}`);
}

void bootstrap();
