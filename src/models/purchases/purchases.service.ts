import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePurchasesDto } from 'src/dto/purchases/create-purchases';
import { UpdatePurchasesDto } from 'src/dto/purchases/update-purchases';
import { Repository } from 'typeorm';
import { Purchase } from './entities/purchase.entity';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(Purchase)
    private readonly purchasesRepository: Repository<Purchase>,
  ) {}

  async findAllPurchases() {
    const purchaseList = await this.purchasesRepository.find();
    if (purchaseList.length) {
      const purchases = purchaseList.map(selectOnlyElement);
      return purchases;
    } else {
      throw new NotFoundException(`The purchases don't exist more`);
    }
  }

  async findOnePurchase(id: string): Promise<Purchase> {
    try {
      return await this.purchasesRepository.findOneOrFail(id);
    } catch (error) {
      throw new NotFoundException(`${id} don't exist more`);
    }
  }

  createPurchase(createPurchasesDto: CreatePurchasesDto): Promise<Purchase> {
    const purchaseToCreate =
      this.purchasesRepository.create(createPurchasesDto);
    return this.purchasesRepository.save(purchaseToCreate);
  }

  async updatePurchase(
    id: string,
    updatePurchasesDto: UpdatePurchasesDto,
  ): Promise<Purchase> {
    const purchaseToUpdate = this.findOnePurchase(id);
    this.purchasesRepository.merge(await purchaseToUpdate, updatePurchasesDto);
    return this.purchasesRepository.save(await purchaseToUpdate);
  }

  async removePurchase(id: string): Promise<void> {
    const purchaseToRemove = await this.purchasesRepository.findOne(id);
    this.purchasesRepository.remove(purchaseToRemove);
  }
}

function selectOnlyElement(show) {
  const {
    client_id,
    client_name,
    total_to_pay,
    card_number,
    value,
    cvv,
    card_holder_name,
    exp_date,
  } = show;
  return {
    client_id,
    client_name,
    total_to_pay,
    card_number,
    value,
    cvv,
    card_holder_name,
    exp_date,
  };
}
