import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TrackingMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const ip = req.ip || req.socket.remoteAddress;
    req['userIP'] = ip;
    next();
  }
}
