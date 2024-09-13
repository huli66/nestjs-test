import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { PersonService } from './person/person.service';
import { OtherModule } from './other/other.module';
import { OtherService } from './other/other.service';
import { BooModule } from './boo/boo.module';

@Module({
  imports: [PersonModule, OtherModule],
  controllers: [AppController],
  providers: [
    AppService,
    PersonService,
    {
      provide: 'static_value',
      // useExisting: OtherService,
      useClass: PersonService,
      // useValue: {
      //   name: 'wlty',
      //   age: 988,
      // },
      // async useFactory() {
      //   const val = await new Promise((resolve) => {
      //     setTimeout(() => resolve(99), 6000);
      //   });
      //   return {
      //     name: 'useFactory',
      //     age: val,
      //   };
      // },
    },
  ],
})
export class AppModule {}
