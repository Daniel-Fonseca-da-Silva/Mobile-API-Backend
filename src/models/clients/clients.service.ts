import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Client } from './client.entity';

@Injectable()
export class ClientsService {
  private clients: Client[] = [
    {
      client_id: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
      client_name: 'Luke Skywalker',
      total_to_pay: 1236,
    },
  ];

  findAllClient() {
    if (!this.clients.length) {
      throw new HttpException(
        `This client don't exist more`,
        HttpStatus.NO_CONTENT,
      );
    }
    return this.clients;
  }

  findOneClient(id: string) {
    const CLIENTS = this.clients.find(
      (clients: Client) => clients.client_id === id,
    );
    if (!CLIENTS) {
      throw new HttpException(
        `Don't possible to find this client with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return CLIENTS;
  }

  createClient(createClientDTO: any) {
    this.clients.push(createClientDTO);
  }

  updateClient(id: string, updateClientDTO: any) {
    const INDEXCLIENT = this.clients.findIndex(
      (clients) => clients.client_id === id,
    );
    this.clients[INDEXCLIENT] = updateClientDTO;
  }

  removeClient(id: string) {
    const INDEXCLIENT = this.clients.findIndex(
      (clients: Client) => clients.client_id === id,
    );
    if (!INDEXCLIENT) {
      throw new HttpException(
        `Don't possible to find this client with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    this.clients.splice(INDEXCLIENT, 1);
  }
}
