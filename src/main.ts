import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('api', app, () =>
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('delivery fee wrapper')
        .setDescription('description')
        .setVersion('1.0')
        .addTag('tags')
        .build(),
    ),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
