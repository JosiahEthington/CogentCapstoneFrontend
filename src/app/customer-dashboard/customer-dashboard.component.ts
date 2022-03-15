import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountSummaryResponse } from '../models/response/AccountSummaryResponse';
import { User } from '../models/User';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  myClick() {
    console.log('Welcome Rama');
  }
  EventFunction() {
    alert('Transfer the Amount');
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId'];

    this.userService.getDashboard(this.customerId).subscribe((data) => {
      this.listOfAccounts = data;
    });

    // this.listOfAccounts[0].accountType='SB'
    // this.listOfAccounts[0].balance=3234
    // this.listOfAccounts[0].status='enabled'
    // this.listOfAccounts[1].accountType='CA'
    // this.listOfAccounts[1].balance=12235
    // this.listOfAccounts[1].status='enabled'
  }

  displayAccountDetails(): void {}
  customerId: number = 0;
  listOfAccounts: AccountSummaryResponse[] = [
    new AccountSummaryResponse(),
    new AccountSummaryResponse(),
  ];
}
