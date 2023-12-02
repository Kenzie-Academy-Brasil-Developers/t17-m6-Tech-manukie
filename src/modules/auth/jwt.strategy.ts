import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        console.log('SECRET_KEY:', process.env.SECRET_KEY);
      
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: process.env.SECRET_KEY,
        });
      }
      
  async validate(payload: any) {
    return { id: payload.sub, email: payload.email };
  }
}