import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Client } from './client.entity';
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

  async findAllClient() {
    const clientList = await this.clientRepository.find();
    if (clientList.length) {
      return clientList;
    } else {
      throw new NotFoundException(`These client don't exist more`);
    }
  }

  async findOneClient(id: string) {
    try {
      return await this.clientRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(
        `This client with code ${id} don't exist more`,
      );
    }
  }

  createClient(createClientsDto: CreateClientsDto) {
    const clientToCreate = this.clientRepository.create(createClientsDto);
    return this.clientRepository.save(clientToCreate);
  }

  async updateClient(id: string, updateClientsDto: UpdateClientsDto) {
    const clientToUpdate = this.clientRepository.findOne(id);
    this.clientRepository.merge(await clientToUpdate, updateClientsDto);
    return this.clientRepository.save(await clientToUpdate);
  }

  async removeClient(id: string) {
    const clientToRemove = await this.clientRepository.findOne(id);
    return this.clientRepository.remove(clientToRemove);
  }
}
