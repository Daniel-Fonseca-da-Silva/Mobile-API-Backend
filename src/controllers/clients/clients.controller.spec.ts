import { Test, TestingModule } from '@nestjs/testing';
import { CreateClientsDto } from 'src/dto/clients/create-clients';
import { UpdateClientsDto } from 'src/dto/clients/update-clients';
import { ClientsService } from '../../models/clients/clients.service';
import { ClientsController } from './clients.controller';

const clientName = 'client1';
const clientTotalToPay = 1;

describe('ClientsController', () => {
  let controller: ClientsController;
  let service: ClientsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [
        {
          provide: ClientsService,
          useValue: {
            findAllClients: jest.fn().mockResolvedValue([
              {
                client_name: clientName,
                total_to_pay: clientTotalToPay,
              },
              {
                client_name: 'client2',
                total_to_pay: 2,
              },
              {
                client_name: 'client3',
                total_to_pay: 3,
              },
            ]),
            findOneClient: jest.fn().mockImplementation((client_id: string) =>
              Promise.resolve({
                client_name: clientName,
                total_to_pay: clientTotalToPay,
                client_id,
              }),
            ),
            createClient: jest
              .fn()
              .mockImplementation((client: CreateClientsDto) =>
                Promise.resolve({ client_id: 'uuid', ...client }),
              ),
            updateClient: jest
              .fn()
              .mockImplementation((client: UpdateClientsDto) =>
                Promise.resolve({ client_id: 'uuid', ...client }),
              ),
            // removeClient: jest.fn().mockResolvedValue(),
          },
        },
      ],
    }).compile();

    controller = module.get<ClientsController>(ClientsController);
    service = module.get<ClientsService>(ClientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAllClients', () => {
    it('should find an array of clients', async () => {
      await expect(controller.findAllClients()).resolves.toEqual([
        {
          client_name: clientName,
          total_to_pay: clientTotalToPay,
        },
        {
          client_name: 'client2',
          total_to_pay: 2,
        },
        {
          client_name: 'client3',
          total_to_pay: 3,
        },
      ]);
    });
  });
  describe('findOneClient', () => {
    it('should find one client', async () => {
      await expect(controller.findOneClient('id1')).resolves.toEqual({
        client_id: 'id1',
        client_name: clientName,
        total_to_pay: clientTotalToPay,
      });
    });
  });
  describe('createClient', () => {
    it('should create a new client', async () => {
      const newClientDto: CreateClientsDto = {
        client_name: 'Client4',
        total_to_pay: 4,
        client_id: 'id4',
      };
      await expect(controller.createClient(newClientDto)).resolves.toEqual({
        client_id: 'id4',
        ...newClientDto,
      });
    });
  });
});
