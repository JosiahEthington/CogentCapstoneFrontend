import { Component, OnInit } from '@angular/core';
import { AccountDetailsStaffResponse } from '../models/response/AccountDetailsStaffResponse';
import { ApproveBeneficiaryResponse } from '../models/response/ApproveBeneficiaryResponse';

@Component({
  selector: 'app-staff-approve-beneficiary',
  templateUrl: './staff-approve-beneficiary.component.html',
  styleUrls: ['./staff-approve-beneficiary.component.css'],
})
export class StaffApproveBeneficiaryComponent implements OnInit {
  approveBeneficiaries: ApproveBeneficiaryResponse[] = [
    new ApproveBeneficiaryResponse(),
    new ApproveBeneficiaryResponse(),
    new ApproveBeneficiaryResponse(),
  ];

  accountDetailStaffResponse: AccountDetailsStaffResponse[] = [
    new AccountDetailsStaffResponse(),
  ];
  constructor() {}

  ngOnInit(): void {
    this.approveBeneficiaries[0].fromCustomer = 1;
    this.approveBeneficiaries[0].beneficiaryAccount = 1234;
    this.approveBeneficiaries[0].beneficiaryAddedDate = new Date(2000, 11, 12);
    this.approveBeneficiaries[1].fromCustomer = 2;
    this.approveBeneficiaries[1].beneficiaryAccount = 12345;
    this.approveBeneficiaries[1].beneficiaryAddedDate = new Date(2001, 5, 1);
    this.approveBeneficiaries[2].fromCustomer = 3;
    this.approveBeneficiaries[2].beneficiaryAccount = 12346;
    this.approveBeneficiaries[2].beneficiaryAddedDate = new Date(2002, 4, 1);
    this.accountDetailStaffResponse[0].customerName = 'John Doe';
  }
}
