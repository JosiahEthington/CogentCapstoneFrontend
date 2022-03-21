import { Component, OnInit } from '@angular/core';
import { BeneficiarySummaryResponse } from '../models/response/BeneficiarySummaryResponse';
import { AccountSummaryResponse } from '../models/response/AccountSummaryResponse';
import { UserService } from '../_services/user.service';
import { TransferRequest } from '../models/request/TransferRequest';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-transfer',
  templateUrl: './customer-transfer.component.html',
  styleUrls: ['./customer-transfer.component.css'],
})
export class CustomerTransferComponent implements OnInit {
  transferRequest: TransferRequest = new TransferRequest();
  constructor(
    private userService: UserService,
    private token: TokenStorageService,
    private router: Router
  ) {}

  customerId: number = 0;

  accounts: AccountSummaryResponse[] = [];
  beneficiaries: BeneficiarySummaryResponse[] = [];
  ngOnInit(): void {
    this.customerId = this.token.getUser().id;
    this.transferRequest.customerId = this.customerId;
    this.userService.getDashboard(this.customerId).subscribe((data) => {
      this.accounts = data;
    });

    this.userService
      .getActiveBeneficiaries(this.customerId)
      .subscribe((data) => {
        this.beneficiaries = data;
      });
  }

  async onSubmit(): Promise<void> {
    console.log('From: ' + this.transferRequest.fromAccount);
    console.log('Ref: ' + this.transferRequest.reason);
    this.userService.transferFunds(this.transferRequest).subscribe();
    await new Promise((r) => setTimeout(r, 500));
    this.router.navigate(['/customerDashboard']).then(() => {
      window.location.reload();
    });
  }
}
