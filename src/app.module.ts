import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { ClientsController } from './controllers/clients/clients.controller';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ClientsController],
  providers: [AppService],
})
export class AppModule {}
