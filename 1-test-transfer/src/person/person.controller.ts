import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('/find')
  query(@Query('name') name: string, @Query('age') age: number) {
    console.log('name', name);
    return `received name: ${name}, age: ${age}`;
  }

  // 路由只会触发第一个符合条件的，注意范围和顺序
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(':id', id);
    return `received id: ${id}`;
  }

  /**
   * form urlencoded 格式，调用的时候设置 content-type: application/x-www-form-urlencoded
   * json 格式，axios 默认调用 post 即可，或者 content-type: application/json
   * 都是通过 @Body 来接收，Nest 内部会根据 Content-Type 进行区分
   * 两者有什么区别呢
   */
  @Post()
  postBody(@Body() createPersonDto: CreatePersonDto) {
    // return `received: ${JSON.stringify(createPersonDto)}`;
    return createPersonDto; // 直接返回一个对象
  }

  /**
   * 用 FilesInterceptor 拦截器解析 form data
   * 用 @UseInterceptors 启用
   * @UploadedFiles 取
   * 非文件内容用 @Body 取
   * Express.Multer.File 类型需要安装 @types/multer
   */
  @Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/', // 保存到路径 uploads 下面
    }),
  )
  postFile(
    @Body() dto: CreatePersonDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log('files', files);
    return `received: ${JSON.stringify(dto)}`;
  }

  // @Post()
  // create(@Body() createPersonDto: CreatePersonDto) {
  //   return this.personService.create(createPersonDto);
  // }

  // @Get()
  // findAll() {
  //   return this.personService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.personService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
  //   return this.personService.update(+id, updatePersonDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.personService.remove(+id);
  // }
}
