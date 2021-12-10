import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateClientsDto } from 'src/dto/clients/create-clients';
import { UpdateClientsDto } from 'src/dto/clients/update-clients';
import { ClientsService } from 'src/models/clients/clients.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clients')
@Controller('starstore/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAllClients() {
    return this.clientsService.findAllClient();
  }

  @Get(':id')
  findOneClient(@Param('id') id: string) {
    return this.clientsService.findOneClient(id);
  }

  @Post()
  createClient(@Body() createClientsDto: CreateClientsDto) {
    return this.clientsService.createClient(createClientsDto);
  }

  @Patch(':id')
  updateClient(
    @Param('id') id: string,
    @Body() updateClientsDto: UpdateClientsDto,
  ) {
    return this.clientsService.updateClient(id, updateClientsDto);
  }

  @Delete(':id')
  removeClient(@Param('id') id: string) {
    this.clientsService.removeClient(id);
  }
}
