import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchasesDto } from './create-purchases';

export class UpdatePurchasesDto extends PartialType(CreatePurchasesDto) {}
