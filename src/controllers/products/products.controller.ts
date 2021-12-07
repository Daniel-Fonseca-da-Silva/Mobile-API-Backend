import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductsDto } from 'src/dto/products/create-products';
import { UpdateProductsDto } from 'src/dto/products/update-products';
import { ProductsService } from 'src/models/products/products.service';

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
  removeProduct(@Param('id') id: string) {
    this.productsService.removeProduct(id);
  }
}
