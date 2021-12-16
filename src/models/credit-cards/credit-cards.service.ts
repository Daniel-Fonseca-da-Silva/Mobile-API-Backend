import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreditCard } from './entities/credit-card.entity';

@Injectable()
export class CreditCardsService {
  private creditCards: CreditCard[] = [
    {
      card_id: '1234123412341234',
      card_number: '1234123412341234',
      value: 7990,
      cvv: 789,
      card_holder_name: 'Luke Skywalker',
      exp_date: '12/24',
    },
  ];

  findAllCreditCards() {
    if (!this.creditCards.length) {
      throw new HttpException(
        `The credit cards don't exist more`,
        HttpStatus.NO_CONTENT,
      );
    }
    return this.creditCards;
  }

  findCreditCard(id: string) {
    const cards = this.creditCards.find(
      (creditCards: CreditCard) => creditCards.card_number === id,
    );
    if (!cards) {
      throw new HttpException(
        `Don't possible to find this credit card with ${id} id`,
        HttpStatus.NOT_FOUND,
      );
    }
    return cards;
  }

  createCreditCard(createCreditCardDTO: any) {
    this.creditCards.push(createCreditCardDTO);
  }

  updateCreditCard(id: string, updateCreditCardDTO: any) {
    const indexCard = this.creditCards.findIndex(
      (creditCards) => creditCards.card_number === id,
    );
    this.creditCards[indexCard] = updateCreditCardDTO;
  }

  removeCreditCard(id: string) {
    this.creditCards = this.creditCards.filter((creditCards: CreditCard) => {
      return creditCards.card_number !== id;
    });
  }
}
