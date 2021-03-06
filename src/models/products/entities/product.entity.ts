import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IProduct } from '../interfaces/product.interface';

@Entity({ name: 'products' })
export class Product implements IProduct {
  @PrimaryGeneratedColumn('uuid')
  prod_id: string;

  @Column({ length: 60 })
  title: string;

  @Column({ nullable: true })
  price: number;

  @Column({ length: 9 })
  zipcode: string;

  @Column({ length: 60 })
  seller: string;

  @Column({ name: 'thumbnail_hd', length: 255 })
  thumbnailHd: string;

  @Column({ name: 'date_at', length: 15 })
  date: string;

  constructor(products?: Partial<Product>) {
    this.prod_id = products?.prod_id;
    this.title = products?.title;
    this.price = products?.price;
    this.zipcode = products?.zipcode;
    this.seller = products?.seller;
    this.thumbnailHd = products?.thumbnailHd;
    this.date = products?.date;
  }
}
