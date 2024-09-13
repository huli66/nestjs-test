import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { LoginGuard } from './login.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalGuards(new LoginGuard());

  app.use(async (req: Request, res: Response, next: NextFunction) => {
    console.log('before', req.url);
    await next();
    console.log('after');
  });
  await app.listen(3000);
}
bootstrap();
