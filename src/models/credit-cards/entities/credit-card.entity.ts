import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ICreditCard } from '../interfaces/credit-card.interface';

@Entity({ name: 'credit_cards' })
export class CreditCard implements ICreditCard {
  @PrimaryGeneratedColumn('uuid')
  card_id: string;

  @Column({ type: 'varchar', length: 16, unique: true })
  card_number: string;

  @Column({ type: 'varchar', length: 20 })
  card_holder_name: string;

  @Column({ type: 'int', width: 11 })
  value: number;

  @Column({ type: 'int', width: 3 })
  cvv: number;

  @Column({ type: 'varchar', length: 5 })
  exp_date: string;
}
