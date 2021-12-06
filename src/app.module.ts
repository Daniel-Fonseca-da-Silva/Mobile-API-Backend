import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';

import { CreditCardsController } from './controllers/credit-cards/credit-cards.controller';
import { CreditCardsService } from './models/credit-cards/credit-cards.service';
import { ClientsModule } from './modules/clients/clients.module';
import { HistoriesModule } from './modules/histories/histories.module';

@Module({
  imports: [ProductsModule, ClientsModule, HistoriesModule],
  controllers: [CreditCardsController],
  providers: [CreditCardsService],
})
export class AppModule {}
