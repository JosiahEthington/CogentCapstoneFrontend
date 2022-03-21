import { Component, OnInit } from '@angular/core';
import { ApproveAccountRequest } from '../models/request/ApproveAccountRequest';
import { AccountApprovalSummaryResponse } from '../models/response/AccountApprovalSummaryResponse';
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

  accountApprovalSummaryResponse: AccountApprovalSummaryResponse[] = [];

  constructor(
    private token: TokenStorageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.userService.staffGetUnapprovedAccounts().subscribe((data) => {
      this.accountApprovalSummaryResponse = data;
    });
  }

  approveAccountRequest: ApproveAccountRequest = new ApproveAccountRequest();

  async onDelete(AccountNumber: number): Promise<void> {
    this.approveAccountRequest.accountNumber = AccountNumber;
    this.userService
      .staffApproveListOfAccount(this.approveAccountRequest)
      .subscribe();
    await new Promise((r) => setTimeout(r, 500));
    window.location.reload();
  }
}
