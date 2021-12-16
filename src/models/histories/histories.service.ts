import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { History } from './entities/history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHistoriesDto } from 'src/dto/histories/create-histories';
import { UpdateHistoriesDto } from 'src/dto/histories/update-histories';

@Injectable()
export class HistoriesService {
  constructor(
    @InjectRepository(History)
    private readonly historiesRepository: Repository<History>,
  ) {}

  async findAllHistories() {
    const historiesList = await this.historiesRepository.find();
    if (historiesList.length) {
      return historiesList;
    } else {
      throw new NotFoundException(`These histories don't exist more`);
    }
  }

  async findHistoriesByClient(id: string) {
    const historiesList = await this.historiesRepository.find();
    if (!historiesList.length) {
      throw new HttpException(
        `Don't possible to find this history with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return historiesList;
  }

  async CreateHistories(createHistoriesDto: CreateHistoriesDto) {
    const historyToCreate = await this.historiesRepository.create(
      createHistoriesDto,
    );
    return this.historiesRepository.save(historyToCreate);
  }

  async updateHistories(id: string, updateHistoriesDto: UpdateHistoriesDto) {
    const historyToUpdate = await this.historiesRepository.findOne(id);
    this.historiesRepository.merge(await historyToUpdate, updateHistoriesDto);
    return this.historiesRepository.save(historyToUpdate);
  }

  async RemoveHistories(id: string) {
    const historyToRemove = await this.historiesRepository.findOne(id);
    return this.historiesRepository.remove(historyToRemove);
  }
}
