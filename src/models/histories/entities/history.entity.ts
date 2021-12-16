import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { IHistory } from '../interfaces/history.interface';

@Entity({ name: 'histories' })
export class History implements IHistory {
  @PrimaryGeneratedColumn('uuid')
  history_id: string;

  @Column('varchar')
  client_id: string;

  @Column('varchar')
  purchase_id: string;

  @Column({ type: 'int', width: 11 })
  value: number;

  @Column({ type: 'varchar', length: 15 })
  date: string;

  @Column({ type: 'varchar', length: 16 })
  card_number: string;
}
