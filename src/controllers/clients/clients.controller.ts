import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientsService } from 'src/models/clients/clients.service';

@Controller('starstore/client')
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
  createClient(@Body() body) {
    return this.clientsService.createClient(body);
  }

  @Patch(':id')
  updateClient(@Param('id') id: string, @Body() body) {
    return this.clientsService.updateClient(id, body);
  }

  @Delete(':id')
  removeClient(@Param('id') id: string) {
    return this.clientsService.removeClient(id);
  }
}
