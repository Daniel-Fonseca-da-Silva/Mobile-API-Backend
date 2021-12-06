import { Module } from '@nestjs/common';
import { ClientsController } from 'src/controllers/clients/clients.controller';
import { ClientsService } from 'src/models/clients/clients.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
