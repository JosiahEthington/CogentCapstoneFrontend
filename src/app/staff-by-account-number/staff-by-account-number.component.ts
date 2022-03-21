import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountDetailsStaffResponse } from '../models/response/AccountDetailsStaffResponse';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-staff-by-account-number',
  templateUrl: './staff-by-account-number.component.html',
  styleUrls: ['./staff-by-account-number.component.css'],
})
export class StaffByAccountNumberComponent implements OnInit {
  currentUser: any;

  // accountDetailStaffResponse: AccountDetailsStaffResponse[] = [
  //   new AccountDetailsStaffResponse(),
  // ];

  accountDetailStaffResponse: AccountDetailsStaffResponse =
    new AccountDetailsStaffResponse();
  accounts: any[] = [];

  constructor(
    private userService: UserService,
    private ref: ChangeDetectorRef
  ) {}
  accountNumber: any;
  ngOnInit(): void {}

  async onSubmit(): Promise<void> {
    this.userService
      .staffGetAccountDetails(this.accountNumber)
      .subscribe((data) => {
        this.accountDetailStaffResponse = data;
        this.accountDetailStaffResponse.transactions.forEach((element) => {
          if (element.fromAccountNum == this.accountNumber) {
            element.transactionType = 'Cr';
          } else {
            element.transactionType = 'Db';
          }
        });
      });
    //await new Promise((r) => setTimeout(r, 500));
  }
}
