import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHistoriesDto {
  @ApiProperty({
    example: '569c30dc-6bdb-407a-b18b-3794f9b206a8',
    description: 'Should be value a format like UUID',
  })
  @IsString()
  purchase_id: string;

  @ApiProperty({
    example: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
    description: 'Should be value a format like UUID',
  })
  @IsString()
  readonly client_id: string;

  @ApiProperty({
    example: '1589',
    description: 'Should be number without decimal',
  })
  @IsNumber()
  readonly value: number;

  @ApiProperty({
    example: '01/03/2022',
    description: 'Should be input with maximum 15 length',
  })
  @IsString()
  readonly date: string;

  @ApiProperty({
    example: '1234123412341234',
    description: 'Should be input with maximum 16 length',
  })
  @IsString()
  readonly card_number: string;
}
