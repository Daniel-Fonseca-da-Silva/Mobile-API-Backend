import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductsDto {
  @ApiProperty({
    example: 'New modern red t-shirt',
    description: 'Should be input with maximum 60 length',
  })
  @IsString()
  readonly title: string;

  @ApiProperty({
    example: '1589',
    description: 'Should be number without decimal',
  })
  @IsNumber()
  readonly price: number;

  @ApiProperty({
    example: '34514-000',
    description: 'Should be input with maximum 9 length',
  })
  @IsString()
  readonly zipcode: string;

  @ApiProperty({
    example: 'Erik Hay',
    description: 'Should be input with maximum 60 length',
  })
  @IsString()
  readonly seller: string;

  @ApiProperty({
    example:
      'https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg',
    description: 'Should be url with maximum 255 length',
  })
  @IsString()
  readonly thumbnailHd: string;

  @ApiProperty({
    example: '12/02/2022',
    description: 'Should be input with maximum 15 length',
  })
  @IsString()
  readonly date: string;
}
