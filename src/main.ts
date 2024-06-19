import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import rateLimit from 'express-rate-limit';
import * as morgan from 'morgan';
import * as fs from 'fs';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  // Rate limiting
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));

  // Logging
  const accessLogStream = fs.createWriteStream('./access.log', { flags: 'a' });
  app.use(morgan('combined', { stream: accessLogStream }));

  // CORS
  app.use(cors());

  await app.listen(3000);
}

bootstrap();
