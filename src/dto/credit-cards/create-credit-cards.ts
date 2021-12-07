import { IsNumber, IsString } from 'class-validator';

export class CreateCreditCardsDto {
  @IsString()
  readonly card_number: string;
  @IsString()
  readonly card_holder_name: string;
  @IsNumber()
  readonly value: number;
  @IsNumber()
  readonly cvv: number;
  @IsString()
  readonly exp_date: string;
}
