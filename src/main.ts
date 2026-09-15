import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/index.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
}
bootstrap();
