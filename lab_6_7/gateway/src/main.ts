import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT', 3000);
  const swaggerPath = configService.get<string>('SWAGGER_PATH', 'api');

  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Lab 6/7 Gateway')
    .setDescription(
      'API Gateway для мікросервісів Lab 6 (ООП) та Lab 7 (Колекції). ' +
        'Запити передаються сервісам через RabbitMQ.',
    )
    .setVersion('1.0')
    .addTag('lab6/person', 'Клас Person')
    .addTag('lab6/phone', 'Клас Phone')
    .addTag('lab6/car', 'Ієрархія Car (Sedan / Truck)')
    .addTag('lab6/library-card', 'Бібліотечна картка (варіант 6) + спадкоємець')
    .addTag('lab7/taxi', 'Сервіс таксі — колекція автомобілів')
    .addTag('lab7/phonebook', 'Телефонна книга (HashMap)')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port);
  console.log(`Gateway is running on: http://localhost:${port}`);
  console.log(`Swagger UI: http://localhost:${port}/${swaggerPath}`);
}

void bootstrap();
