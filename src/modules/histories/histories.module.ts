import { Module } from '@nestjs/common';
import { HistoriesController } from 'src/controllers/histories/histories.controller';
import { HistoriesService } from 'src/models/histories/histories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from 'src/models/histories/history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  controllers: [HistoriesController],
  providers: [HistoriesService],
})
export class HistoriesModule {}
