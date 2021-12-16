import { Module } from '@nestjs/common';
import { PurchasesController } from 'src/controllers/purchases/purchases.controller';
import { PurchasesService } from 'src/models/purchases/purchases.service';

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
