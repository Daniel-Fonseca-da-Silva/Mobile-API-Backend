import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IPurchase } from '../interfaces/purchase.interface';
@Entity({ name: 'purchases' })
export class Purchase implements IPurchase {
  @PrimaryGeneratedColumn('uuid')
  purchase_id: string;

  @Column('varchar')
  client_id: string;

  @Column({ type: 'varchar', length: 20 })
  client_name: string;

  @Column({ type: 'int', width: 11 })
  total_to_pay: number;

  @Column({ type: 'varchar', length: 16, unique: true })
  card_number: string;

  @Column({ type: 'int', width: 11 })
  value: number;

  @Column({ type: 'int', width: 3 })
  cvv: number;

  @Column({ type: 'varchar', length: 20 })
  card_holder_name: string;

  @Column({ type: 'varchar', length: 5 })
  exp_date: string;
}
