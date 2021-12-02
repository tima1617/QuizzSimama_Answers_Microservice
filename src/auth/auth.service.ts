import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AnswerService } from '../answers/answers.service';

@Injectable()
export class AuthService {
    constructor(
        private answerService: AnswerService,
        private jwtService: JwtService
    ) {}

    async validateQuestion(id: number): Promise<any> {
        const question = await this.answerService.findAll(id);
        return question;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
