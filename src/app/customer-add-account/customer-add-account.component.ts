import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateAccountRequest } from '../models/request/CreateAccountRequest';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-customer-add-account',
  templateUrl: './customer-add-account.component.html',
  styleUrls: ['./customer-add-account.component.css'],
})
export class CustomerAddAccountComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  accountNo: number = 0;
  createAccountRequest: CreateAccountRequest = new CreateAccountRequest();

  onSubmit(): void {
    console.log('Form submitted');
    this.accountNo = this.route.snapshot.params['accountNo'];
    this.userService.postAddAccount(this.accountNo, this.createAccountRequest);
  }
}
