import { PartialType } from '@nestjs/mapped-types';
import { CreateClientsDto } from './create-clients';

export class UpdateClientsDto extends PartialType(CreateClientsDto) {}
