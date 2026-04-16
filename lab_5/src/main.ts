import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT', 3000);
  const apiPrefix = configService.get<string>('API_PREFIX', '');
  const swaggerPath = configService.get<string>('SWAGGER_PATH', 'api');

  if (apiPrefix) {
    app.setGlobalPrefix(apiPrefix);
  }

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Lab 5 — Побудова методів')
    .setDescription(
      'REST API для лабораторної роботи №5: обчислення площі трапеції, ' +
        'пошук мінімуму/максимуму, робота з масивами.',
    )
    .setVersion('1.0')
    .addTag('task1', 'Обчислення площі трапеції (Варіант 6)')
    .addTag('task2', 'Найменше з трьох чисел')
    .addTag('task3', 'Виведення масиву')
    .addTag('task4', 'Найбільше число з масиву')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger UI: http://localhost:${port}/${swaggerPath}`);
}

void bootstrap();
