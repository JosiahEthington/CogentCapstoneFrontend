import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountDetailsResponse } from '../models/response/AccountDetailsResponse';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-customer-account-statement',
  templateUrl: './customer-account-statement.component.html',
  styleUrls: ['./customer-account-statement.component.css'],
})
export class CustomerAccountStatementComponent implements OnInit {
  constructor(
    private tokenStorageService: TokenStorageService,
    private userService: UserService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerId = this.tokenStorageService.getUser().id;
    this.accountNumber = this.route.snapshot.params['accountNumber'];
    this.userService.getDashboard(this.customerId).subscribe((data) => {
      console.log(data);
      this.accounts = data;
    });
    this.ref.detectChanges();
    console.log(this.accounts);
    this.userService
      .getAccountDetails(this.customerId, this.accountNumber)
      .subscribe((data) => {
        this.accountDetailsResponse = data;
        this.accountDetailsResponse.transactions.forEach((element) => {
          console.log(element.fromAccountNum);
          if (element.fromAccountNum == this.accountNumber) {
            element.transactionType = 'Cr';
          } else {
            element.transactionType = 'Db';
          }
        });
      });
    this.ref.detectChanges();
    console.log(this.accounts);
  }
  accounts: any[] = [];
  accountDetailsResponse: AccountDetailsResponse = new AccountDetailsResponse();
  customerId: number = 0;
  accountNumber: number = 0;
  show(): void {
    this.router
      .navigate(['/customerAccountStatement/' + this.accountNumber])
      .then(() => {
        window.location.reload();
      });
  }
}
