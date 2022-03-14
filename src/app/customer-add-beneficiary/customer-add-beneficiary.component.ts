import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { AddBeneficiaryRequest } from '../models/request/AddBeneficiaryRequest';
=======
>>>>>>> Stashed changes

@Component({
  selector: 'app-customer-add-beneficiary',
  templateUrl: './customer-add-beneficiary.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./customer-add-beneficiary.component.css'],
})
export class CustomerAddBeneficiaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  addBeneficiaryRequest: AddBeneficiaryRequest = new AddBeneficiaryRequest();
=======
  styleUrls: ['./customer-add-beneficiary.component.css']
})
export class CustomerAddBeneficiaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> Stashed changes
}
