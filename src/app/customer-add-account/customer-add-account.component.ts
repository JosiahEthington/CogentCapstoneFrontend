import { Component, OnInit } from '@angular/core';
import { CreateAccountRequest } from '../models/request/CreateAccountRequest';


@Component({
  selector: 'app-customer-add-account',
  templateUrl: './customer-add-account.component.html',
  styleUrls: ['./customer-add-account.component.css']
})
export class CustomerAddAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  createAccountRequest: CreateAccountRequest = new CreateAccountRequest();

  createAccount(): void {}

}
