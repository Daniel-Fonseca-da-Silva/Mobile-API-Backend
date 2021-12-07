import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('/starstore/buy')
export class PurchasesController {
  @Get()
  findAllPurchases() {
    return `Returned all purchases inside database`;
  }

  @Get(':id')
  findOnePurchase(@Param('id') id: string) {
    return `Returned one purchase with id ${id} inside database`;
  }

  @Post()
  createPurchase(@Body() body) {
    return body;
  }

  @Patch(':id')
  updatePurchase(@Param('id') id: string) {
    return `This purchase with id ${id} was updated`;
  }

  @Delete(':id')
  removePurchase(@Param('id') id: string) {
    return `This purchase with id ${id} was removed`;
  }
}
