import { Component, OnInit } from '@angular/core';
import { AddBeneficiaryRequest } from '../models/request/AddBeneficiaryRequest';

@Component({
  selector: 'app-customer-add-beneficiary',
  templateUrl: './customer-add-beneficiary.component.html',
  styleUrls: ['./customer-add-beneficiary.component.css'],
})
export class CustomerAddBeneficiaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  addBeneficiaryRequest: AddBeneficiaryRequest = new AddBeneficiaryRequest();
}
