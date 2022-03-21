import { Component, OnInit } from '@angular/core';
import { SetEnabledRequest } from '../models/request/SetEnabledRequest';
import { CustomerSummaryResponse } from '../models/response/CustomerSummaryResponse';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-staff-customer-enable',
  templateUrl: './staff-customer-enable.component.html',
  styleUrls: ['./staff-customer-enable.component.css'],
})
export class StaffCustomerEnableComponent implements OnInit {
  constructor(private userService: UserService) {}
  currentUser: any;
  customers: CustomerSummaryResponse[] = [];
  ngOnInit(): void {
    this.userService.staffGetListCustomer().subscribe((data) => {
      this.customers = data;
    });
  }
  setEnabledRequest: SetEnabledRequest = new SetEnabledRequest();

  setEnabled(customerId: number, customerStatus: any): void {
    console.log(customerStatus);
    this.setEnabledRequest.status = !customerStatus;
    this.setEnabledRequest.id = customerId;
    this.userService
      .staffSetCustomerEnabled(this.setEnabledRequest)
      .subscribe();
  }
}
