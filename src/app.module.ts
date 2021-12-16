import { Module } from '@nestjs/common';
import { ProductsModule } from './models/products/products.module';
import { HistoriesModule } from './models/histories/histories.module';
import { CreditCardsModule } from './models/credit-cards/credit-cards.module';
import { PurchasesModule } from './models/purchases/purchases.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from './models/clients/clients.module';

@Module({
  imports: [
    ProductsModule,
    ClientsModule,
    HistoriesModule,
    CreditCardsModule,
    PurchasesModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: Number(configService.get('DB_PORT', 5432)),
        username: configService.get('DB_USERNAME', 'api'),
        password: configService.get('DB_PASSWORD', 'api123456'),
        database: configService.get('DB_DATABASE', 'api'),
        entities: [__dirname + '/**/*entity{.js,.ts}'],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
