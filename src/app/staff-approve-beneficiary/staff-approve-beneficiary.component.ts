import { Component, OnInit } from '@angular/core';
import { Beneficiary } from '../models/Beneficiary';
import { ApproveBeneficiaryRequest } from '../models/request/ApproveBeneficiaryRequest';
import { AccountApprovalSummaryResponse } from '../models/response/AccountApprovalSummaryResponse';
import { ApproveBeneficiaryResponse } from '../models/response/ApproveBeneficiaryResponse';
import { BeneficiarySummaryResponse } from '../models/response/BeneficiarySummaryResponse';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-staff-approve-beneficiary',
  templateUrl: './staff-approve-beneficiary.component.html',
  styleUrls: ['./staff-approve-beneficiary.component.css'],
})
export class StaffApproveBeneficiaryComponent implements OnInit {
  approveBeneficiaries: ApproveBeneficiaryResponse[] = [];
  unapprovedBeneficiaries: Beneficiary[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.staffGetUnapprovedBeneficiaries().subscribe({
      next: (data) => {
        this.unapprovedBeneficiaries = data;
      },
    });
  }
  approveBeneficiaryRequest: ApproveBeneficiaryRequest =
    new ApproveBeneficiaryRequest();
  async onSubmit(unapproveBeneficiary: Beneficiary): Promise<void> {
    this.approveBeneficiaryRequest.beneficiaryId =
      unapproveBeneficiary.beneficiaryId;
    this.approveBeneficiaryRequest.beneficiaryAccount =
      unapproveBeneficiary.accountNo;
    this.approveBeneficiaryRequest.beneficiaryAddedDate =
      unapproveBeneficiary.addedDate;
    this.approveBeneficiaryRequest.approved = 'yes';

    this.userService
      .staffApproveBeneficiary(this.approveBeneficiaryRequest)
      .subscribe();
    alert('Beneficiary approved');
    await new Promise((r) => setTimeout(r, 500));
    window.location.reload();
  }
}
