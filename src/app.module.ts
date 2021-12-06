import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';

import { HistoriesController } from './controllers/histories/histories.controller';
import { HistoriesService } from './models/histories/histories.service';
import { CreditCardsController } from './controllers/credit-cards/credit-cards.controller';
import { CreditCardsService } from './models/credit-cards/credit-cards.service';
import { ClientsModule } from './modules/clients/clients.module';

@Module({
  imports: [ProductsModule, ClientsModule],
  controllers: [HistoriesController, CreditCardsController],
  providers: [HistoriesService, CreditCardsService],
})
export class AppModule {}
