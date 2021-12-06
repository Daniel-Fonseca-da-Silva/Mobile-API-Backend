import { Module } from '@nestjs/common';
import { HistoriesController } from 'src/controllers/histories/histories.controller';
import { HistoriesService } from 'src/models/histories/histories.service';

@Module({
  controllers: [HistoriesController],
  providers: [HistoriesService],
})
export class HistoriesModule {}
