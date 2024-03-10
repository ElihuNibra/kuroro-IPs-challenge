import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TrackingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const userId = this.idFromRequest(req);
    const ip = req.ip || req.socket.remoteAddress;

    if (!userId) {
      console.log('There is no userID found, IP will not be saved');
      return next();
    }
    req['userIp'] = ip;
    next();
  }
  private idFromRequest(req: Request): string | null {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      return authHeader.substring(7);
    }
    return null;
  }
}
