import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('/starstore/history')
export class HistoriesController {
  @Get()
  findAllHistories() {
    return `All histories in database`;
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `All histories with this ${id} id`;
  }

  @Post()
  CreateHistories(@Body() body) {
    return body;
  }

  @Patch(':id')
  updateHistories(@Param('id') id: string, @Body() body) {
    return `Historie with id ${id} was removed`;
  }

  @Delete(':id')
  RemoveHistories(@Param('id') id: string) {
    return `Deleted historie with id ${id}`;
  }
}
