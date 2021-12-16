import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controllers/products/products.controller';
import { ProductsService } from 'src/models/products/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/models/products/entities/product.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
