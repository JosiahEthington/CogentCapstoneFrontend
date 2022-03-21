import { Component, OnInit } from '@angular/core';
import { UpdateCustomerRequest } from '../models/request/UpdateCustomerRequest';
import { GetCustomerResponse } from '../models/response/GetCustomerResponse';
import { UpdateCustomerResponse } from '../models/response/UpdateCustomerResponse';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-customer-update-profile',
  templateUrl: './customer-update-profile.component.html',
  styleUrls: ['./customer-update-profile.component.css'],
})
export class CustomerUpdateProfileComponent implements OnInit {
  constructor(
    private tokenStorageService: TokenStorageService,
    private userService: UserService
  ) {}
  securityQuestions: any = [
    "What is your dog's name?",
    'What city were you born in?',
  ];
  async ngOnInit(): Promise<void> {
    this.customerId = this.tokenStorageService.getUser().id;
    this.userService.getListCustomers(this.customerId).subscribe((data) => {
      this.getCustomerResponse = data;
    });
    await new Promise((r) => setTimeout(r, 500));
    this.updateCustomerRequest.aadhar = this.getCustomerResponse.aadhar;
    this.updateCustomerRequest.pan = this.getCustomerResponse.pan;
    this.updateCustomerRequest.fullname = this.getCustomerResponse.fullName;
    this.updateCustomerRequest.phone = this.getCustomerResponse.phone;
  }
  customerId: number = 0;
  updateCustomerRequest: UpdateCustomerRequest = new UpdateCustomerRequest();
  getCustomerResponse: GetCustomerResponse = new GetCustomerResponse();
  updateCustomerResponse: UpdateCustomerResponse = new UpdateCustomerResponse();

  async updateCustomer(): Promise<void> {
    this.userService
      .updateCustomer(this.customerId, this.updateCustomerRequest)
      .subscribe();
    alert('Customer information updated');
  }
}
