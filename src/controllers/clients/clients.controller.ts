import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateClientsDto } from '../../dto/clients/create-clients';
import { UpdateClientsDto } from '../../dto/clients/update-clients';
import { ClientsService } from '../../models/clients/clients.service';
import { ApiTags } from '@nestjs/swagger';
import { Client } from 'src/models/clients/entities/client.entity';

@ApiTags('Clients')
@Controller('starstore/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async findAllClients(): Promise<Client[]> {
    return this.clientsService.findAllClients();
  }

  @Get(':id')
  async findOneClient(@Param('id') client_id: string): Promise<Client> {
    return this.clientsService.findOneClient(client_id);
  }

  @Post()
  async createClient(
    @Body() createClientsDto: CreateClientsDto,
  ): Promise<Client> {
    return this.clientsService.createClient(createClientsDto);
  }

  @Patch(':id')
  async updateClient(
    @Param('id') id: string,
    @Body() updateClientsDto: UpdateClientsDto,
  ): Promise<Client> {
    return this.clientsService.updateClient(id, updateClientsDto);
  }

  @Delete(':id')
  async removeClient(@Param('id') id: string): Promise<void> {
    this.clientsService.removeClient(id);
  }
}
