import { CreditCardsService } from '../../models/credit-cards/credit-cards.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('starstore/cards')
export class CreditCardsController {
  constructor(private readonly creditCardsService: CreditCardsService) {}

  @Get()
  findAllCreditCards() {
    return this.creditCardsService.findAllCreditCards();
  }

  @Get(':id')
  findCreditCard(@Param('id') id: string) {
    return this.creditCardsService.findCreditCard(id);
  }

  @Post()
  createCreditCard(@Body() body) {
    return this.creditCardsService.createCreditCard(body);
  }

  @Patch(':id')
  updateCreditCard(@Param('id') id: string, @Body() body) {
    return this.creditCardsService.updateCreditCard(id, body);
  }

  @Delete(':id')
  removeCreditCard(@Param('id') id: string) {
    return this.creditCardsService.removeCreditCard(id);
  }
}
