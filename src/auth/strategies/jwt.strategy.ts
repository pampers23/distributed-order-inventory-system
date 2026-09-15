import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtUser } from '../../types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const jwtSecret = process.env.JWT_SECRET_KEY;

    if (!jwtSecret) {
      throw new Error('JWT_SECRET must be defined');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: JwtUser) {
    return {
      sub: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}