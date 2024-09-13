import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PersonService } from './person/person.service';
import { BooService } from './boo/boo.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(
    // @Inject('static_value2') // TODO: 别名没有生效
    @Inject('static_value')
    private readonly staticVal: { name: string; age: number },
    private boo: BooService,
  ) {}
  @Inject(AppService)
  private appService: AppService;

  @Inject(PersonService)
  private personService: PersonService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/test/:person')
  getOne(@Param('person') person: string) {
    const res = this.personService.findAll();
    console.log('value', this.staticVal.age);
    console.log(this.boo.findAll());
    return `use ${person}: ${res}`;
  }
}
