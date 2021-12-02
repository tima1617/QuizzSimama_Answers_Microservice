import { AnswerService } from './answers/answers.service';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private answersService: AnswerService) {}

  // POST /login
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user); // TODO : return JWT access token
  }

  // GET /create
  @Get('score')
  async score(@Request() req) {
    return this.answersService.findAll(req.query.id_user); // TODO : return JWT access token
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
