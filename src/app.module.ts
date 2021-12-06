import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { ClientsController } from './controllers/clients/clients.controller';
import { ClientsService } from './models/clients/clients.service';

@Module({
  imports: [ProductsModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class AppModule {}
