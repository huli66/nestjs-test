import { PartialType } from '@nestjs/mapped-types';
import { CreateBooDto } from './create-boo.dto';

export class UpdateBooDto extends PartialType(CreateBooDto) {}
