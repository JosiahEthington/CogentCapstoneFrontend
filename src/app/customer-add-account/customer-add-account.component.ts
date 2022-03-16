import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateAccountRequest } from '../models/request/CreateAccountRequest';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-customer-add-account',
  templateUrl: './customer-add-account.component.html',
  styleUrls: ['./customer-add-account.component.css'],
})
export class CustomerAddAccountComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) {}
  customerId: number = 0;
  ngOnInit(): void {
    this.createAccountRequest.approved = 'no';
    this.customerId = this.tokenStorage.getUser().id;
  }
  createAccountRequest: CreateAccountRequest = new CreateAccountRequest();

  onSubmit(): void {
    console.log('Form submitted');
    this.userService
      .postAddAccount(this.customerId, this.createAccountRequest)
      .subscribe();
    this.router.navigate(['customerDashboard']);
  }
}
