import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from 'src/models/products/products.service';
import { ProductsController } from './products.controller';

describe('ProductsController', () => {
  let prodController: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            findAllProduct: jest.fn(),
            findOneProduct: jest.fn(),
            createProduct: jest.fn(),
            updateProduct: jest.fn(),
            removeProduct: jest.fn(),
          },
        },
      ],
    }).compile();

    prodController = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(prodController).toBeDefined();
  });
});
