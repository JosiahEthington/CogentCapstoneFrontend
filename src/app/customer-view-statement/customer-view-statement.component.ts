import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDetailsResponse } from '../models/response/AccountDetailsResponse';
import { AccountDetailsStaffResponse } from '../models/response/AccountDetailsStaffResponse';
import { AccountSummaryResponse } from '../models/response/AccountSummaryResponse';
import { Transaction } from '../models/Transaction';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-customer-view-statement',
  templateUrl: './customer-view-statement.component.html',
  styleUrls: ['./customer-view-statement.component.css'],
})
export class CustomerViewStatementComponent implements OnInit {
  currentUser: any;

  accountDetailsResponse: AccountDetailsResponse = new AccountDetailsResponse();
  accountNumber: number = 0;
  constructor(
    private token: TokenStorageService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ThIS');
    this.currentUser = this.token.getUser();
    this.accountNumber = this.route.snapshot.params['accountNumber'];
    this.userService
      .getAccountDetails(this.currentUser.id, this.accountNumber)
      .subscribe((data) => {
        this.accountDetailsResponse = data;
      });
    this.accountDetailsResponse.transactions.forEach((data) => {
      if (this.accountNumber === data.fromAccountNum) {
        data.transactionType = 'Cr';
      } else {
        data.transactionType = 'Db';
      }
    });
  }
}
