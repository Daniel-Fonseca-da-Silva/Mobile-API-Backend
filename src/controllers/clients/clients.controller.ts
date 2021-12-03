import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('client')
export class ClientsController {
  @Get()
  findAllClients() {
    return `All clients are was returned`;
  }
  @Get(':id')
  findOneClient(@Param('id') id: string) {
    return `One client with id ${id} was returned`;
  }
  @Post()
  createClient(@Body() body) {
    return body;
  }
  @Patch(':id')
  updateClient(@Param('id') id: string, @Body() body) {
    return `This client with id ${id} was updated`;
  }
  @Delete(':id')
  removeClient(@Param('id') id: string) {
    return `This client with id ${id} was removed`;
  }
}
