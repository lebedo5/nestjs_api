import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    ParseIntPipe,
    Post,
    Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {}
    // POST /auth/signup
    @HttpCode(HttpStatus.OK)
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto);
    }

    // POST /auth/signin
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }
}
