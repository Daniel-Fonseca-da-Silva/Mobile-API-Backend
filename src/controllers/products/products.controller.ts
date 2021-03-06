import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductsDto } from '../../dto/products/create-products';
import { UpdateProductsDto } from '../../dto/products/update-products';
import { ProductsService } from '../../models/products/products.service';
import { ApiTags } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

@ApiTags('Products')
@Controller('starstore/product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAllProduct() {
    return this.productsService.findAllProduct();
  }

  @Get(':id')
  findOneProduct(@Param('id') id: string) {
    return this.productsService.findOneProduct(id);
  }

  @Post()
  createProduct(@Body() createProductsDto: CreateProductsDto) {
    return this.productsService.createProduct(createProductsDto);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductsDto: UpdateProductsDto,
  ) {
    return this.productsService.updateProduct(id, updateProductsDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeProduct(@Param('id') id: string) {
    this.productsService.removeProduct(id);
  }
}
