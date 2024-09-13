import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: () => void) {
    console.log('log middleware before', req.url);
    await next();
    console.log('log middleware after', req.url);
  }
}
