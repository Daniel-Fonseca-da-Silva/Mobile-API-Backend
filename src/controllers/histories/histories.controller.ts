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
import { CreateHistoriesDto } from 'src/dto/histories/create-histories';
import { UpdateHistoriesDto } from 'src/dto/histories/update-histories';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Histories')
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
  CreateHistories(@Body() createHistoriesDto: CreateHistoriesDto) {
    return this.historiesService.CreateHistories(createHistoriesDto);
  }

  @Patch(':id')
  updateHistories(
    @Param('id') id: string,
    @Body() updateHistoriesDto: UpdateHistoriesDto,
  ) {
    return this.historiesService.updateHistories(id, updateHistoriesDto);
  }

  @Delete(':id')
  RemoveHistories(@Param('id') id: string) {
    this.historiesService.RemoveHistories(id);
  }
}
