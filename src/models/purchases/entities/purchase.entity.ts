import { IPurchase } from '../interfaces/purchase.interface';
export class Purchase implements IPurchase {
  purchase_id: string;
  client_id: string;
  client_name: string;
  total_to_pay: number;
  card_number: string;
  value: number;
  cvv: number;
  card_holder_name: string;
  exp_date: string;
}
