import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetEnabledRequest } from '../models/request/SetEnabledRequest';
import { AccountSummaryResponse } from '../models/response/AccountSummaryResponse';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  constructor(
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerId = this.tokenStorageService.getUser().id;
    this.userService.getDashboard(this.customerId).subscribe((data) => {
      this.listOfAccounts = data;
    });
  }

  displayAccountDetails(accountNumber: number): void {
    this.router
      .navigate(['customerAccountStatement/' + accountNumber])
      .then(() => {
        window.location.reload();
      });
  }
  toggleEnabled(accountNumber: number, status: any): void {
    console.log('Status: ' + status);
    this.setEnabled.status = !status;
    this.setEnabled.id = accountNumber;
    this.userService.setEnabled(this.setEnabled).subscribe();
  }
  customerId: number = 0;
  listOfAccounts: AccountSummaryResponse[] = [];
  setEnabled: SetEnabledRequest = new SetEnabledRequest();
}
