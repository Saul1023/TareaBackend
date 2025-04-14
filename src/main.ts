import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Habilita CORS
  app.enableCors({
    origin: 'http://localhost:3001', // frontend o formulario
    methods: 'GET, POST, PUT, DELETE',
  });

  // Servir archivos estáticos (formulario)
  app.use(express.static(join(__dirname, '..', 'public')));
  // Si prefieres mostrar directamente en http://localhost:3000
  // app.use(express.static(join(__dirname, '..', 'public')));

  await app.listen(3000);
}
bootstrap();
