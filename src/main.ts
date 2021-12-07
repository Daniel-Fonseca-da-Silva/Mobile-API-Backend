import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Documentation with Swagger - Stone API')
    .setDescription(
      'The challenge is to create a REST API for the Star Wars store that will be consumed by an app (Android and iOS). All items will be dropped into an app-side cart and passed ​​to an API to perform an e-commerce transaction.',
    )
    .setVersion('1.0')
    .addTag('Products')
    .addTag('Clients')
    .addTag('Purchases')
    .addTag('Credit Cards')
    .addTag('Histories')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('starstore/api', app, document);

  await app.listen(3000);
}
bootstrap();
