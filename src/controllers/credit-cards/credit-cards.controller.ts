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
  @Get()
  findAllCreditCards() {
    return `Returned all credit-cards`;
  }

  @Get(':id')
  findCreditCard(@Param('id') id: string) {
    return `Returned credit-card with id ${id}`;
  }

  @Post()
  createCreditCard(@Body() body) {
    return body;
  }

  @Patch(':id')
  updateCreditCard(@Param('id') id: string, @Body() body) {
    return `Updated credit card with id ${id}`;
  }

  @Delete(':id')
  removeCreditCard(@Param('id') id: string) {
    return `Removed credit card with id ${id}`;
  }
}
