import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { History } from './history.entity';

@Injectable()
export class HistoriesService {
  private histories: History[] = [
    {
      client_id: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
      purchase_id: '569c30dc-6bdb-407a-b18b-3794f9b206a8',
      value: 1234,
      date: '19/08/2016',
      card_number: '**** **** **** 1234',
    },
  ];

  findAllHistories() {
    if (!this.histories.length) {
      throw new HttpException(
        `This histories don't exist more`,
        HttpStatus.NOT_FOUND,
      );
    }
    return this.histories;
  }

  findHistoriesByClient(id: string) {
    const histories = this.histories.find(
      (histories: History) => histories.client_id === id,
    );
    if (!histories) {
      throw new HttpException(
        `Don't possible to find this history with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return histories;
  }

  CreateHistories(createHistoryDto: any) {
    this.histories.push(createHistoryDto);
  }

  updateHistories(id: string, updateHistoryDto: any) {
    const indexHistories = this.histories.findIndex(
      (histories) => histories.client_id === id,
    );
    this.histories[indexHistories] = updateHistoryDto;
  }

  RemoveHistories(id: string) {
    this.histories = this.histories.filter((histories: History) => {
      return histories.client_id !== id;
    });
  }
}
