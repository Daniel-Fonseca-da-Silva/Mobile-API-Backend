import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientsDto {
  @ApiProperty({
    example: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
    description: 'Should be value a format like UUID',
  })
  @IsString()
  readonly client_id: string;

  @ApiProperty({
    example: 'Nikolai vladimir',
    description: 'Should be input with maximum 20 length',
  })
  @IsString()
  readonly client_name: string;

  @ApiProperty({
    example: 1599,
    description: 'Should be number without decimal',
  })
  @IsNumber()
  readonly total_to_pay: number;
}
