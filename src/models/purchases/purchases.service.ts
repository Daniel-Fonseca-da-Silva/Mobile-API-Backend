import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Purchase } from './entities/purchase.entity';

@Injectable()
export class PurchasesService {
  private purchases: Purchase[] = [
    {
      purchase_id: '569c30dc-6bdb-407a-b18b-3794f9b206a8',
      client_id: '7e655c6e-e8e5-4349-8348-e51e0ff3072e',
      client_name: 'Luke Skywalker',
      total_to_pay: 1236,
      card_number: '1234123412341234',
      value: 7990,
      cvv: 789,
      card_holder_name: 'Luke Skywalker',
      exp_date: '12/24',
    },
  ];

  findAllPurchases() {
    if (!this.purchases.length) {
      throw new HttpException(
        `This purchase don't exist more`,
        HttpStatus.NO_CONTENT,
      );
    }
    return this.purchases;
  }

  findOnePurchase(id: string) {
    const purchasesSaved = this.purchases.find(
      (purchases: Purchase) => purchases.client_id === id,
    );
    if (!purchasesSaved) {
      throw new HttpException(
        `Don't possible to find this purchase with id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
    return purchasesSaved;
  }

  createPurchase(createPurchasesDto: any) {
    this.purchases.push(createPurchasesDto);
  }

  updatePurchase(id: string, updatePurchasesDto: any) {
    const indexpurchase = this.purchases.findIndex(
      (purchases) => purchases.client_id === id,
    );

    this.purchases[indexpurchase] = updatePurchasesDto;
  }

  removePurchase(id: string) {
    const indexpurchase = this.purchases.findIndex(
      (purchases) => purchases.client_id === id,
    );
    if (indexpurchase != 0) {
      this.purchases.splice(indexpurchase, 1);
    }
  }
}
