import { Transaction } from '../Transaction';

export class AccountDetailsResponse {
  accountNumber: number = 0;
  accountType: string = '';
  status: string = '';
  balance: number = 0;
  transactions: Transaction[] = [];
}
