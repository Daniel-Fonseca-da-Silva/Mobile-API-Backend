import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

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
}
