import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCreditCardsDto {
  @ApiProperty({
    example: '1234123412341234',
    description: 'Should be input with maximum 16 length',
  })
  @IsString()
  readonly card_number: string;

  @ApiProperty({
    example: 'Nikolai vladimir',
    description: 'Should be input with maximum 20 length',
  })
  @IsString()
  readonly card_holder_name: string;

  @ApiProperty({
    example: '5889',
    description: 'Should be number without decimal',
  })
  @IsNumber()
  readonly value: number;

  @ApiProperty({
    example: '5627',
    description: 'Should be number without decimal and maximum 4 length',
  })
  @IsNumber()
  readonly cvv: number;

  @ApiProperty({
    example: '12/25',
    description: 'Should be input with maximum 5 length',
  })
  @IsString()
  readonly exp_date: string;
}
