import { Global, Module, OnApplicationShutdown, OnModuleDestroy } from '@nestjs/common';
import { BooService } from './boo.service';
import { BooController } from './boo.controller';

@Global()
@Module({
  controllers: [BooController],
  providers: [BooService],
  exports: [BooService],
})
export class BooModule {}
