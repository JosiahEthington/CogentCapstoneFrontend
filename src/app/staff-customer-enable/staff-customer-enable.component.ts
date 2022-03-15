import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-customer-enable',
  templateUrl: './staff-customer-enable.component.html',
  styleUrls: ['./staff-customer-enable.component.css'],
})
export class StaffCustomerEnableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  customers: any = [
    { customerName: 'name1', customerId: 1 },
    { customerName: 'name2', customerId: 2 },
    { customerName: 'name3', customerId: 3 },
  ];
}
