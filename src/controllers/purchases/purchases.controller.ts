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
import { CreatePurchasesDto } from '../../dto/purchases/create-purchases';
import { UpdatePurchasesDto } from '../../dto/purchases/update-purchases';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Purchases')
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
  createPurchase(@Body() createPurchasesDto: CreatePurchasesDto) {
    return this.purchasesService.createPurchase(createPurchasesDto);
  }

  @Patch(':id')
  updatePurchase(
    @Param('id') id: string,
    @Body() updatePurchasesDto: UpdatePurchasesDto,
  ) {
    return this.purchasesService.updatePurchase(id, updatePurchasesDto);
  }

  @Delete(':id')
  removePurchase(@Param('id') id: string) {
    this.purchasesService.removePurchase(id);
  }
}
