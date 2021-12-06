import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';s
import { ClientsModule } from './modules/clients/clients.module';
import { HistoriesModule } from './modules/histories/histories.module';
import { CreditCardsModule } from './modules/credit-cards/credit-cards.module';

@Module({
  imports: [ProductsModule, ClientsModule, HistoriesModule, CreditCardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
