import { Component, OnInit } from '@angular/core';
import { AccountDetailsStaffResponse } from '../models/response/AccountDetailsStaffResponse';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-staff-by-account-number',
  templateUrl: './staff-by-account-number.component.html',
  styleUrls: ['./staff-by-account-number.component.css'],
})
export class StaffByAccountNumberComponent implements OnInit {
  currentUser: any;

  accountDetailStaffResponse: AccountDetailsStaffResponse[] = [
    new AccountDetailsStaffResponse(),
  ];

  constructor(private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.accountDetailStaffResponse[0].accountNumber = 44332211;
    this.accountDetailStaffResponse[0].balance = 123235;
    this.accountDetailStaffResponse[0].customerName = 'John Doe';
    this.accountDetailStaffResponse[0].transactions = [
      {
        date: new Date(2022, 1, 1),
        reference: '123-testing',
        amount: 500,
        accountType: 'Cr',
      },
      {
        date: new Date(2022, 2, 1),
        reference: '222-testing',
        amount: 2000,
        accountType: 'DB',
      },
    ];
  }
}
