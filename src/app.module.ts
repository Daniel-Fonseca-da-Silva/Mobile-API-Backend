import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { ClientsController } from './controllers/clients/clients.controller';
import { ClientsService } from './models/clients/clients.service';
import { HistoriesController } from './controllers/histories/histories.controller';
import { HistoriesService } from './models/histories/histories.service';
import { CreditCardsController } from './controllers/credit-cards/credit-cards.controller';
import { CreditCardsService } from './models/credit-cards/credit-cards.service';

@Module({
  imports: [ProductsModule],
  controllers: [ClientsController, HistoriesController, CreditCardsController],
  providers: [ClientsService, HistoriesService, CreditCardsService],
})
export class AppModule {}
