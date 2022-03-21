import { Transaction } from '../Transaction';

export class AccountDetailsStaffResponse {
  accountNumber: number = 0;
  customerName: string = '';
  balance: number = 0;
  transactions: Transaction[] = [];
}
