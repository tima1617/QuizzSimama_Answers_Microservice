import { AnswerService } from './answers/answers.service';
import { Controller, Get, Request, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private answersService: AnswerService) {}

  // GET /create
  @Get('score')
  async score(@Request() req) {
    return this.answersService.findAll(req.query.id_user);
  }

  // GET /create
  @Post('create')
  async create(@Request() req) {
    return this.answersService.create(req.query.iduser,req.query.score, req.query.nbquestion, req.query.category, req.query.difficulty);
  }
}
