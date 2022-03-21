import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetEnabledRequest } from '../models/request/SetEnabledRequest';
import { BeneficiarySummaryResponse } from '../models/response/BeneficiarySummaryResponse';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-customer-remove-beneficiary',
  templateUrl: './customer-remove-beneficiary.component.html',
  styleUrls: ['./customer-remove-beneficiary.component.css'],
})
export class CustomerRemoveBeneficiaryComponent implements OnInit {
  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private route: ActivatedRoute
  ) {}
  customerId: number = 0;
  beneficiaryId: number = 0;
  currentUser: any;

  beneficiarySummaryResponses: BeneficiarySummaryResponse[] = [
    new BeneficiarySummaryResponse(),
    new BeneficiarySummaryResponse(),
  ];

  ngOnInit(): void {
    this.customerId = this.tokenStorageService.getUser().id;

    this.userService.getListBeneficiary(this.customerId).subscribe((data) => {
      this.beneficiarySummaryResponses = data;
    });

    this.currentUser = this.tokenStorageService.getUser();
  }

  async onDelete(beneficiaryId: number): Promise<void> {
    console.log(beneficiaryId);
    this.userService
      .deleteRemoveBeneficiary(this.customerId, beneficiaryId)
      .subscribe();
    await new Promise((r) => setTimeout(r, 500));

    window.location.reload();
  }
  setEnabled: SetEnabledRequest = new SetEnabledRequest();
}
