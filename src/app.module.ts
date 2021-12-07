import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { ClientsModule } from './modules/clients/clients.module';
import { HistoriesModule } from './modules/histories/histories.module';
import { CreditCardsModule } from './modules/credit-cards/credit-cards.module';
import { PurchasesController } from './controllers/purchases/purchases.controller';

@Module({
  imports: [ProductsModule, ClientsModule, HistoriesModule, CreditCardsModule],
  controllers: [PurchasesController],
  providers: [],
})
export class AppModule {}
