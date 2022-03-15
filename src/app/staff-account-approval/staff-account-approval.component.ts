import { Component, OnInit } from '@angular/core';
import { AccountDetailsStaffResponse } from '../models/response/AccountDetailsStaffResponse';

@Component({
  selector: 'app-staff-account-approval',
  templateUrl: './staff-account-approval.component.html',
  styleUrls: ['./staff-account-approval.component.css'],
})
export class StaffAccountApprovalComponent implements OnInit {
  accountDetailStaffResponse: AccountDetailsStaffResponse[] = [
    new AccountDetailsStaffResponse(),
  ];

  constructor() {}

  ngOnInit(): void {
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
