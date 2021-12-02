import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './answers/answers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [QuestionsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
