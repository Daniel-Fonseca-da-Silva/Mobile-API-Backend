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
    const clientSaved = this.clients.find(
      (clients: Client) => clients.client_id === id,
    );
    if (!clientSaved) {
      throw new HttpException(
        `Don't possible to find this client with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return clientSaved;
  }

  createClient(createClientDTO: any) {
    this.clients.push(createClientDTO);
  }

  updateClient(id: string, updateClientDTO: any) {
    const indexClient = this.clients.findIndex(
      (clients) => clients.client_id === id,
    );
    this.clients[indexClient] = updateClientDTO;
  }

  removeClient(id: string) {
    this.clients = this.clients.filter((client: Client) => {
      return client.client_id !== id;
    });
  }
}
