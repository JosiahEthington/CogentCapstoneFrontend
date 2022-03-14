<<<<<<< Updated upstream
=======
import { Transaction } from '../Transaction';

>>>>>>> Stashed changes
export class AccountDetailsResponse {
  accountNumber: number = 0;
  accountType: string = '';
  status: string = '';
<<<<<<< Updated upstream
  transactions: any = {};
=======
  balance: number = 0;
  transactions: Transaction[] = [];
>>>>>>> Stashed changes
}
