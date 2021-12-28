import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { IClient } from '../interfaces/client.interface';
@Entity({ name: 'clients' })
export class Client implements IClient {
  @PrimaryGeneratedColumn('uuid')
  client_id: string;

  @Column({ type: 'varchar', length: 20 })
  client_name: string;

  @Column({ type: 'int', width: 11 })
  total_to_pay: number;
}