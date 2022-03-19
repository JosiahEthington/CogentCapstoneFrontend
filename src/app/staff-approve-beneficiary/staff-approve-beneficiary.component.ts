import { Component, OnInit } from '@angular/core';
import { ApproveBeneficiaryRequest } from '../models/request/ApproveBeneficiaryRequest';
import { AccountApprovalSummaryResponse } from '../models/response/AccountApprovalSummaryResponse';
import { ApproveBeneficiaryResponse } from '../models/response/ApproveBeneficiaryResponse';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-staff-approve-beneficiary',
  templateUrl: './staff-approve-beneficiary.component.html',
  styleUrls: ['./staff-approve-beneficiary.component.css'],
})
export class StaffApproveBeneficiaryComponent implements OnInit {
  approveBeneficiaries: ApproveBeneficiaryResponse[] = [];
  unapprovedBeneficiaries: AccountApprovalSummaryResponse[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.staffGetUnapprovedAccounts().subscribe({
      next: (data) => {
        this.unapprovedBeneficiaries = data;
      },
    });
    this.approveBeneficiaryRequest.approved = 'no';
  }
  approveBeneficiaryRequest: ApproveBeneficiaryRequest =
    new ApproveBeneficiaryRequest();
  onSubmit(): void {
    this.userService
      .staffSetCustomerEnabled(this.approveBeneficiaryRequest)
      .subscribe();
    alert('Beneficiary approved');
    window.location.reload();
  }
}
