import { IsNumber, IsString } from 'class-validator';

export class CreateHistoriesDto {
  @IsString()
  readonly client_id: string;
  @IsNumber()
  readonly value: number;
  @IsString()
  readonly date: string;
  @IsString()
  readonly card_number: string;
}
