import { Injectable } from '@nestjs/common';
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
    return this.products;
  }
  findOneProduct(id: string) {
    return this.products.find(
      (products: Product) => products.id === Number(id),
    );
  }
  createProduct(createProductDTO: any) {
    this.products.push(createProductDTO);
  }
  updateProduct(id: string, updateProductDTO: any) {
    const INDEXPRODUCT = this.products.findIndex(
      (products) => products.id === Number(id),
    );

    this.products[INDEXPRODUCT] = updateProductDTO;
  }
  removeProduct(id: string) {
    const INDEXPRODUCT = this.products.findIndex(
      (products) => products.id === Number(id),
    );
    if(INDEXPRODUCT => 0) {
      this.products.splice(INDEXPRODUCT, 1);
    }
  }
}
