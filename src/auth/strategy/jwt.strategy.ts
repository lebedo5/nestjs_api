import { PassportStrategy } from '@nestjs/passport';
import {
    ExtractJwt,
    Strategy,
} from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { validate } from 'class-validator';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(
    Strategy,
    'jwt',
) {
    constructor(
        config: ConfigService,
        private prisma: PrismaService,
    ) {
        super({
            jwtFromRequest:
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get('JWT_SECRET'),
        });
    }
    async validate(payload: {
        sub: number;
        email: string;
    }) {
        console.log(payload);
        const user =
            await this.prisma.user.findUnique({
                where: {
                    id: payload.sub,
                },
            });
        delete user.hash;
        return payload;
    }
}
