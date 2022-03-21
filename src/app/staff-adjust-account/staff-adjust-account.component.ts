import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferRequestStaff } from '../models/request/TransferRequestStaff';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-staff-adjust-account',
  templateUrl: './staff-adjust-account.component.html',
  styleUrls: ['./staff-adjust-account.component.css'],
})
export class StaffAdjustAccountComponent implements OnInit {
  constructor(
    private token: TokenStorageService,
    private userService: UserService,
    private router: Router
  ) {}

  currentUser: any;
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
  transferRequestStaff: TransferRequestStaff = new TransferRequestStaff();

  async onSubmit(): Promise<void> {
    this.transferRequestStaff.byStaff = this.currentUser.username;
    this.userService.staffTransferFunds(this.transferRequestStaff).subscribe();
    alert('Transaction completed');
    await new Promise((r) => setTimeout(r, 500));
    window.location.reload();
  }
}
