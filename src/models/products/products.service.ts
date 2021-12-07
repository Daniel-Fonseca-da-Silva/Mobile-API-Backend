import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      title: 'Blusa do Imperio',
      price: 7990,
      zipcode: '78993-000',
      seller: 'João da Silva',
      thumbnailHd:
        'https://cdn.awsli.com.br/600x450/21/21351/produto/3853007/f66e8c63ab.jpg',
      date: '26/11/2015',
    },
  ];

  findAllProduct() {
    if (!this.products.length) {
      throw new HttpException(
        `This product don't exist more`,
        HttpStatus.NO_CONTENT,
      );
    }
    return this.products;
  }

  findOneProduct(id: string) {
    const productsSaved = this.products.find(
      (products: Product) => products.id === Number(id),
    );
    if (!productsSaved) {
      throw new HttpException(
        `Don't possible to find this id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return productsSaved;
  }

  createProduct(createProductDTO: any) {
    this.products.push(createProductDTO);
    return createProductDTO;
  }

  updateProduct(id: string, updateProductDTO: any) {
    const indexProduct = this.products.findIndex(
      (products) => products.id === Number(id),
    );

    this.products[indexProduct] = updateProductDTO;
  }

  removeProduct(id: string) {
    const indexProduct = this.products.findIndex(
      (products) => products.id === Number(id),
    );
    if (indexProduct != 0) {
      this.products.splice(indexProduct, 1);
    }
  }
}
