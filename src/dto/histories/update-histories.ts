import { PartialType } from '@nestjs/mapped-types';
import { CreateHistoriesDto } from './create-histories';

export class UpdateHistoriesDto extends PartialType(CreateHistoriesDto) {}
