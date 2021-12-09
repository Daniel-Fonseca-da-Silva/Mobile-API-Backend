import { Module } from '@nestjs/common';
import { ClientsController } from 'src/controllers/clients/clients.controller';
import { ClientsService } from 'src/models/clients/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../../models/clients/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsModule {}
