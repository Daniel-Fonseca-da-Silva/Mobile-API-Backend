import { PurchasesService } from '../../models/purchases/purchases.service';
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
  constructor(private readonly purchasesService: PurchasesService) {}
  @Get()
  findAllPurchases() {
    return this.purchasesService.findAllPurchases();
  }

  @Get(':id')
  findOnePurchase(@Param('id') id: string) {
    return this.purchasesService.findOnePurchase(id);
  }

  @Post()
  createPurchase(@Body() body) {
    return this.purchasesService.createPurchase(body);
  }

  @Patch(':id')
  updatePurchase(@Param('id') id: string, @Body() body) {
    return this.purchasesService.updatePurchase(id, body);
  }

  @Delete(':id')
  removePurchase(@Param('id') id: string) {
    return this.purchasesService.removePurchase(id);
  }
}
