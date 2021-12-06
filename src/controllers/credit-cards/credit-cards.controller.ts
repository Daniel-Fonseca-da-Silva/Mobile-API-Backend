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
import { CreateCreditCardsDto } from 'src/dto/credit-cards/create-credit-cards';
import { UpdateCreditCardsDto } from 'src/dto/credit-cards/update-credit-cards';

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
  createCreditCard(@Body() createCreditCardsDto: CreateCreditCardsDto) {
    return this.creditCardsService.createCreditCard(createCreditCardsDto);
  }

  @Patch(':id')
  updateCreditCard(
    @Param('id') id: string,
    @Body() updateCreditCardsDto: UpdateCreditCardsDto,
  ) {
    return this.creditCardsService.updateCreditCard(id, updateCreditCardsDto);
  }

  @Delete(':id')
  removeCreditCard(@Param('id') id: string) {
    return this.creditCardsService.removeCreditCard(id);
  }
}
