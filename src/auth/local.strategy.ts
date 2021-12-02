import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService : AuthService) {
        super(); // config
    }

    async validate(id: number): Promise<any> {
        const user = await this.authService.validateQuestion(id);

        if(!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}