import { Component, OnInit } from '@angular/core';
import { ApproveAccountRequest } from '../models/request/ApproveAccountRequests';
import { AccountApprovalSummaryResponse } from '../models/response/AccountApprovalSummaryResponse';
import { AccountDetailsStaffResponse } from '../models/response/AccountDetailsStaffResponse';
import { AccountSummaryResponse } from '../models/response/AccountSummaryResponse';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-staff-account-approval',
  templateUrl: './staff-account-approval.component.html',
  styleUrls: ['./staff-account-approval.component.css'],
})
export class StaffAccountApprovalComponent implements OnInit {
  currentUser: any;

  accountApprovalSummaryResponse: AccountApprovalSummaryResponse[] = [
    new AccountApprovalSummaryResponse(),
  ];

  accountSummaryResponse: AccountSummaryResponse[] = [
    new AccountSummaryResponse(),
  ];

  constructor(
    private token: TokenStorageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.userService.getDashboard(this.currentUser.id).subscribe((data) => {
      this.accountSummaryResponse = data;
    });
  }

  approveAccountRequest: ApproveAccountRequest = new ApproveAccountRequest();

  onDelete(AccountNumber: number): void {
    this.accountApprovalSummaryResponse[0].approved = 'yes';
    this.userService
      .staffApproveAccount(
        this.currentUser.id,
        AccountNumber,
        this.approveAccountRequest
      )
      .subscribe((data) => {
        this.accountApprovalSummaryResponse = data;
      });
  }
}
