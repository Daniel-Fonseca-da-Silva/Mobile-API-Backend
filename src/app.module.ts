import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './models/products/products.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
