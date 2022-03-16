import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeneficiarySummaryResponse } from '../models/response/BeneficiarySummaryResponse';

@Component({
  selector: 'app-customer-remove-beneficiary',
  templateUrl: './customer-remove-beneficiary.component.html',
  styleUrls: ['./customer-remove-beneficiary.component.css'],
})
export class CustomerRemoveBeneficiaryComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  customerId: number = 0;
  beneficiarySummaryResponses: BeneficiarySummaryResponse[] = [
    new BeneficiarySummaryResponse(),
    new BeneficiarySummaryResponse(),
  ];

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId'];
    this.beneficiarySummaryResponses[0].beneficiaryAccountNo = 123;
    this.beneficiarySummaryResponses[0].beneficiaryName = 'Xinyi';

    this.beneficiarySummaryResponses[1].beneficiaryAccountNo = 234;
    this.beneficiarySummaryResponses[1].beneficiaryName = 'Rashmi';
  }

  onDelete(): void {
    console.log('delete button pressed');
  }
}
