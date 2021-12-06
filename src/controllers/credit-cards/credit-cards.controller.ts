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
  findOneCreditCard(@Param('id') id: string) {
    return `Returned credit-card with id ${id}`;
  }

  @Post()
  createCreditCards(@Body() body) {
    return body;
  }

  @Patch(':id')
  updateCreditCards(@Param('id') id: string, @Body() body) {
    return `Updated credit card with id ${id}`;
  }

  @Delete(':id')
  removeCreditCards(@Param('id') id: string) {
    return `Removed credit card with id ${id}`;
  }
}
