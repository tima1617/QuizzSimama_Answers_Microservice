import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

//http://127.0.0.1:7676/score?id_user=1

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.connectMicroservice(
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3030,
        header: {
          "Access-Control-Allow-Methods" : "GET"
        }
      },
    }
  )
  app.enableCors();
  app.listen(7676);
}
bootstrap();
