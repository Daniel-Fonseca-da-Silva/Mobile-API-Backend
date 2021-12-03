import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('product')
export class ProductsController {
  @Get()
  findAllProduct() {
    return 'List of products';
  }
  @Get(':id')
  findOneProduct(@Param('id') id: string) {
    return `The id product is ${id}`;
  }
  @Post()
  createProduct(@Body() body) {
    return body;
  }
  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body) {
    return `Product witd id ${id} was update`;
  }
  @Delete(':id')
  removeProduct(@Param('id') id: string) {
    return `Product with id ${id} was removed`;
  }
}
