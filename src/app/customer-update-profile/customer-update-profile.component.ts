import { Component, OnInit } from '@angular/core';
import { UpdateCustomerRequest } from '../models/request/UpdateCustomerRequest';
import { UpdateCustomerResponse } from '../models/response/UpdateCustomerResponse';

@Component({
  selector: 'app-customer-update-profile',
  templateUrl: './customer-update-profile.component.html',
  styleUrls: ['./customer-update-profile.component.css'],
})
export class CustomerUpdateProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  updateCustomerRequest: UpdateCustomerRequest = new UpdateCustomerRequest();

  updateCustomerResponse: UpdateCustomerResponse = new UpdateCustomerResponse();

  updateCustomer(): void {}
}
