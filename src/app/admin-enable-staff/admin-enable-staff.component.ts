import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SetEnabledRequest } from '../models/request/SetEnabledRequest';
import { StaffSummaryResponse } from '../models/response/StaffSummaryResponse';
import { User } from '../models/User';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin-enable-staff',
  templateUrl: './admin-enable-staff.component.html',
  styleUrls: ['./admin-enable-staff.component.css'],
})
export class AdminEnableStaffComponent implements OnInit {
  // staffs: Observable<[]>;

  // constructor(private _staffService: StaffService) {}

  // ngOnInit() {
  //   this._staffService.getAllStuff.subscribe((response) => {
  //     this.staffs = response;
  //   });

  //   // enableStaff: SetEnabledRequest = new SetEnabledRequest();
  // }

  constructor(private userService: UserService) {}
  staffs: User[] = [];
  ngOnInit(): void {
    this.userService.adminListStaff().subscribe((data) => {
      this.staffs = data;
    });
  }

  setEnabled: SetEnabledRequest = new SetEnabledRequest();
  toggleEnabled(accountNumber: number, status: any): void {
    console.log('Status: ' + status);
    this.setEnabled.status = !status;
    this.setEnabled.id = accountNumber;
    this.userService.adminSetStaffEnabled(this.setEnabled).subscribe();
    window.location.reload();
  }
}
