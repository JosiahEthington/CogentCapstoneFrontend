import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { BeneficiarySummaryResponse } from '../models/response/BeneficiarySummaryResponse';
import { AccountSummaryResponse } from '../models/response/AccountSummaryResponse';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-customer-transfer',
  templateUrl: './customer-transfer.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./customer-transfer.component.css'],
})
export class CustomerTransferComponent implements OnInit {
  constructor() {}
  accounts: AccountSummaryResponse[] = [
    new AccountSummaryResponse(),
    new AccountSummaryResponse(),
    new AccountSummaryResponse(),
  ];
  beneficiaries: BeneficiarySummaryResponse[] = [
    //Sample list for testing.
    new BeneficiarySummaryResponse(),
    new BeneficiarySummaryResponse(),
    new BeneficiarySummaryResponse(),
  ];
  ngOnInit(): void {
    this.beneficiaries[0].beneficiaryId = 0;
    this.beneficiaries[0].beneficiaryAccountNo = 1234;
    this.beneficiaries[0].beneficiaryName = "Jerry's Checking";
    this.beneficiaries[1].beneficiaryId = 1;
    this.beneficiaries[1].beneficiaryAccountNo = 12345;
    this.beneficiaries[1].beneficiaryName = "Jerry's Savings";
    this.beneficiaries[2].beneficiaryId = 2;
    this.beneficiaries[2].beneficiaryAccountNo = 123456;
    this.beneficiaries[2].beneficiaryName = "Jim's Checking";
    this.accounts[0].accountNumber = 5432;
    this.accounts[0].accountType = 'SB';
    this.accounts[0].balance = 5000;
    this.accounts[1].accountNumber = 54321;
    this.accounts[1].accountType = 'CA';
    this.accounts[1].balance = 7000;
    this.accounts[2].accountNumber = 54322;
    this.accounts[2].accountType = 'SB';
    this.accounts[2].balance = 6000;
  }
=======
  styleUrls: ['./customer-transfer.component.css']
})
export class CustomerTransferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> Stashed changes
}
