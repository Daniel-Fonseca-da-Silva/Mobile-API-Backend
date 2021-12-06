export class CreateCreditCardsDto {
  readonly card_number: string;
  readonly card_holder_name: string;
  readonly value: number;
  readonly cvv: number;
  readonly exp_date: string;
}
