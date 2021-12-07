import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsDto } from './create-products';

export class UpdateProductsDto extends PartialType(CreateProductsDto) {}
