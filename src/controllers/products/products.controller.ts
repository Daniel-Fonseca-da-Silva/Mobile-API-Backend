import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from 'src/models/products/products.service';

@Controller('product')
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
  createProduct(@Body() body) {
    return this.productsService.createProduct(body);
  }
  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body) {
    return this.productsService.updateProduct(id, body);
  }
  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return this.productsService.removeProduct(id);
  }
}
