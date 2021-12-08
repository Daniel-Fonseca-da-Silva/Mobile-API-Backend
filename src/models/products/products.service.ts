import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductsDto } from '../../dto/products/create-products';
import { UpdateProductsDto } from '../../dto/products/update-products';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async findAllProduct() {
    const productList = await this.productsRepository.find();
    if (productList.length) {
      return productList;
    } else {
      throw new NotFoundException(`This products don't exist more`);
    }
  }

  async findOneProduct(id: string) {
    try {
      return await this.productsRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(`${id} don't exist more`);
    }
  }

  createProduct(createProductDTO: CreateProductsDto) {
    const productsSaved = this.productsRepository.create(createProductDTO);
    return this.productsRepository.save(productsSaved);
  }

  async updateProduct(id: string, updateProductsDto: UpdateProductsDto) {
    const products = this.findOneProduct(id);
    this.productsRepository.merge(await products, updateProductsDto);
    return this.productsRepository.save(await products);
  }

  async removeProduct(id: string) {
    const products = await this.productsRepository.findOne(id);
    return this.productsRepository.remove(products);
  }
}
