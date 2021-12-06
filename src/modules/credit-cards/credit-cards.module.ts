import { Module } from '@nestjs/common';
import { CreditCardsController } from 'src/controllers/credit-cards/credit-cards.controller';
import { CreditCardsService } from 'src/models/credit-cards/credit-cards.service';

@Module({
  controllers: [CreditCardsController],
  providers: [CreditCardsService],
})
export class CreditCardsModule {}
