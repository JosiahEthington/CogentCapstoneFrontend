import { Component, OnInit } from '@angular/core';
import { AccountDetailsResponse } from '../models/response/AccountDetailsResponse';
import { Transaction } from '../models/Transaction';

@Component({
  selector: 'app-customer-account-statement',
  templateUrl: './customer-account-statement.component.html',
  styleUrls: ['./customer-account-statement.component.css'],
})
export class CustomerAccountStatementComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.accountDetailsResponse.accountNumber = 4332211;
    this.accountDetailsResponse.balance = 12335;
    this.accountDetailsResponse.transactions = [
      new Transaction(),
      new Transaction(),
      new Transaction(),
    ];
    this.accountDetailsResponse.transactions[0].dateTime = new Date();
    this.accountDetailsResponse.transactions[0].reference = 'some method';
    this.accountDetailsResponse.transactions[0].amount = 20;
    this.accountDetailsResponse.transactions[0].transactionType = 'Cr';

    this.accountDetailsResponse.transactions[1].dateTime = new Date();
    this.accountDetailsResponse.transactions[1].reference = 'works';
    this.accountDetailsResponse.transactions[1].amount = 500;
    this.accountDetailsResponse.transactions[1].transactionType = 'Db';

    this.accountDetailsResponse.transactions[2].dateTime = new Date();
    this.accountDetailsResponse.transactions[2].reference = 'josiah';
    this.accountDetailsResponse.transactions[2].amount = 10;
    this.accountDetailsResponse.transactions[2].transactionType = 'Cr';
  }
  accountDetailsResponse: AccountDetailsResponse = new AccountDetailsResponse();
}
