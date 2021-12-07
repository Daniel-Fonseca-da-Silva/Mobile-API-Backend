import { IsNumber, IsString } from 'class-validator';

export class CreateClientsDto {
  @IsString()
  readonly client_id: string;
  @IsString()
  readonly client_name: string;
  @IsNumber()
  readonly total_to_pay: number;
}
