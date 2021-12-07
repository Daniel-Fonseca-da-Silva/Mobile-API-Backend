import { PartialType } from '@nestjs/mapped-types';
import { CreateCreditCardsDto } from './create-credit-cards';

export class UpdateCreditCardsDto extends PartialType(CreateCreditCardsDto) {}
