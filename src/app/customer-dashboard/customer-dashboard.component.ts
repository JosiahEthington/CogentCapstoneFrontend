import { Component, OnInit } from '@angular/core';
import { AccountSummaryResponse } from '../models/response/AccountSummaryResponse';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor() { }
  myClick(){
    console.log('Welcome Rama')
  }
  EventFunction(){
    alert("Transfer the Amount");
  }

  ngOnInit(): void {
    this.listOfAccounts[0].accountType='SB'
    this.listOfAccounts[0].balance=3234
    this.listOfAccounts[0].status='enabled'

    this.listOfAccounts[1].accountType='CA'
    this.listOfAccounts[1].balance=12235
    this.listOfAccounts[1].status='enabled'
   
   
  }

  displayAccountDetails():void{
    
  }
  listOfAccounts:AccountSummaryResponse[]=[new AccountSummaryResponse(),new AccountSummaryResponse()]
}
