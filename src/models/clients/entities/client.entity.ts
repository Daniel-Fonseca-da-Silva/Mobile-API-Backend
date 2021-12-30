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

  constructor(client_id?: string, client_name?: string, total_to_pay?: number) {
    this.client_id = client_id || '';
    this.client_name = client_name || '';
    this.total_to_pay = total_to_pay || NaN;
  }
}
