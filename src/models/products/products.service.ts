import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
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

  async findAllProduct(): Promise<CreateProductsDto[]> {
    const productList = await this.productsRepository.find();
    if (productList.length) {
      const products = productList.map(selectOnlyElement);
      return products;
    } else {
      throw new NotFoundException(`This products don't exist more`);
    }
  }

  async findOneProduct(id: string): Promise<Product> {
    try {
      return await this.productsRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(`${id} don't exist more`);
    }
  }

  createProduct(createProductDTO: CreateProductsDto): Promise<Product> {
    const productsSaved = this.productsRepository.create(createProductDTO);
    return this.productsRepository.save(productsSaved);
  }

  async updateProduct(
    id: string,
    updateProductsDto: UpdateProductsDto,
  ): Promise<Product> {
    const products = this.findOneProduct(id);
    this.productsRepository.merge(await products, updateProductsDto);
    return this.productsRepository.save(await products);
  }

  async removeProduct(id: string): Promise<void> {
    const products = await this.productsRepository.findOne(id);
    this.productsRepository.remove(products);
  }
}

function selectOnlyElement(show) {
  const { title, price, zipcode, seller, thumbnailHd, date } = show;
  return { title, price, zipcode, seller, thumbnailHd, date };
}
