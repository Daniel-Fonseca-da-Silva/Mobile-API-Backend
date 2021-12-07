import { IsNumber, IsString } from 'class-validator';
export class CreateProductsDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly price: number;
  @IsString()
  readonly zipcode: string;
  @IsString()
  readonly seller: string;
  @IsString()
  readonly thumbnailHd: string;
  @IsString()
  readonly date: string;
}
