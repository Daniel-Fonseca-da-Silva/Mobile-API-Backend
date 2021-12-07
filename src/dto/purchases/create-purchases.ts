import { IsNumber, IsString } from 'class-validator';

export class CreatePurchasesDto {
  @IsString()
  readonly client_id: string;
  @IsString()
  readonly client_name: string;
  @IsNumber()
  readonly total_to_pay: number;
  @IsString()
  readonly card_number: string;
  @IsNumber()
  readonly value: number;
  @IsNumber()
  readonly cvv: number;
  @IsString()
  readonly card_holder_name: string;
  @IsString()
  readonly exp_date: string;
}
