import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddBeneficiaryRequest } from '../models/request/addBeneficiaryRequest';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-customer-add-beneficiary',
  templateUrl: './customer-add-beneficiary.component.html',
  styleUrls: ['./customer-add-beneficiary.component.css'],
})
export class CustomerAddBeneficiaryComponent implements OnInit {
  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}
  customerId: number = 0;

  ngOnInit(): void {
    this.customerId = this.tokenStorageService.getUser().id;
  }
  addBeneficiaryRequest: AddBeneficiaryRequest = new AddBeneficiaryRequest();

  onSubmit(): void {
    this.userService
      .postAddBeneficiary(this.customerId, this.addBeneficiaryRequest)
      .subscribe();
    this.router.navigate(['/customerRemoveBeneficiary']);
  }
}
