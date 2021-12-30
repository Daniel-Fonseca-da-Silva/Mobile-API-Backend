import { Injectable, NotFoundException } from '@nestjs/common';
import { Client } from './entities/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientsDto } from 'src/dto/clients/create-clients';
import { UpdateClientsDto } from 'src/dto/clients/update-clients';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findAllClients(): Promise<Client[]> {
    const clientList = await this.clientRepository.find();
    if (clientList.length) {
      return clientList;
    } else {
      throw new NotFoundException(`These client don't exist more`);
    }
  }

  async findOneClient(client_id: string): Promise<Client> {
    try {
      return await this.clientRepository.findOneOrFail(client_id);
    } catch (error) {
      throw new NotFoundException(
        `This client with code ${client_id} don't exist more`,
      );
    }
  }

  async createClient(createClientsDto: CreateClientsDto): Promise<Client> {
    const clientToCreate = await this.clientRepository.create(createClientsDto);
    return this.clientRepository.save(clientToCreate);
  }

  async updateClient(
    id: string,
    updateClientsDto: UpdateClientsDto,
  ): Promise<Client> {
    const clientToUpdate = this.clientRepository.findOne(id);
    this.clientRepository.merge(await clientToUpdate, updateClientsDto);
    return this.clientRepository.save(await clientToUpdate);
  }

  async removeClient(id: string): Promise<void> {
    const clientToRemove = await this.clientRepository.findOne(id);
    this.clientRepository.remove(clientToRemove);
  }
}
