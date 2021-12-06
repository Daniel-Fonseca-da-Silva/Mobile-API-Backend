import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HistoriesService } from 'src/models/histories/histories.service';

@Controller('/starstore/history')
export class HistoriesController {
  constructor(private readonly historiesService: HistoriesService) {}
  @Get()
  findAllHistories() {
    return this.historiesService.findAllHistories();
  }

  @Get(':id')
  findHistoriesByClient(@Param('id') id: string) {
    return this.historiesService.findHistoriesByClient(id);
  }

  @Post()
  CreateHistories(@Body() body) {
    return this.historiesService.CreateHistories(body);
  }

  @Patch(':id')
  updateHistories(@Param('id') id: string, @Body() body) {
    return this.historiesService.updateHistories(id, body);
  }

  @Delete(':id')
  RemoveHistories(@Param('id') id: string) {
    return this.historiesService.RemoveHistories(id);
  }
}
