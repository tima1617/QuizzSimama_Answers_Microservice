import { AnswerService } from './answers.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [AnswerService],
  exports: [AnswerService]
})
export class QuestionsModule {}
