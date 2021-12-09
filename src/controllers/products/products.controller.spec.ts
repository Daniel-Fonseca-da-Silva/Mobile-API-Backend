import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from '../../models/products/products.service';
import { Product } from '../../models/products/product.entity';
import { IsString } from 'class-validator';

const productList: Product[] = [
  new Product({
    id: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
    title: 'Modern shoes black',
    price: 69,
    zipcode: '13500-110',
    seller: 'Erik Norman',
    thumbnailHd:
      'https://cdn.awsli.com.br/1000x1000/21/21351/produto/7234148/55692a941d.jpg',
    date: '26/11/2015',
  }),
];

describe('ProductsController', () => {
  let prodController: ProductsController;
  let prodService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            findAllProduct: jest.fn().mockResolvedValue(productList),
            findOneProduct: jest.fn(),
            createProduct: jest.fn(),
            updateProduct: jest.fn(),
            removeProduct: jest.fn(),
          },
        },
      ],
    }).compile();

    prodController = module.get<ProductsController>(ProductsController);
    prodService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(prodController).toBeDefined();
    expect(prodService).toBeDefined();
  });

  describe('findAllProduct', () => {
    it('Should be a list of products', async () => {
      // Act
      const result = await prodController.findAllProduct();
      // Assert
      expect(result).toEqual(productList);
      expect(typeof result).toEqual('object');
      expect(result[0].id).toEqual(productList[0].id);
      expect(prodService.findAllProduct).toHaveBeenCalledTimes(1);
    });
  });
});
