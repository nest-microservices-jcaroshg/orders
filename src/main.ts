import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config/env';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const logger: Logger = new Logger('Main');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: env.PORT,
      },
    },
  );
  await app.listen();
  logger.log(`orders running on ${env.PORT}`);
}
bootstrap();
