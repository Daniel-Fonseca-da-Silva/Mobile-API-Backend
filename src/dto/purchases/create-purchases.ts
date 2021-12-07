export class CreatePurchasesDto {
  readonly client_id: string;
  readonly client_name: string;
  readonly total_to_pay: number;
  readonly card_number: string;
  readonly value: number;
  readonly cvv: number;
  readonly card_holder_name: string;
  readonly exp_date: string;
}
