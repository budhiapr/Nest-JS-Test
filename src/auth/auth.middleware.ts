import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private logger = new Logger('AuthMiddleware');

  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    if (authHeader && typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7); // Remove 'Bearer ' to get the token
      this.logger.log(`Bearer token found: ${token}`);
    } else {
      this.logger.warn('No Bearer token found in Authorization header');
    }
    next();
  }
}
