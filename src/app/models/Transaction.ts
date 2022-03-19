export class Transaction {
  transactionId: number = 0;
  dateTime: Date = new Date();
  reference: string = '';
  amount: number = 0;
  fromAccountNum: number = 0;
  toAccountNum: number = 0;
  transactionType: string = '';
}
