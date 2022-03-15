import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SetEnabledRequest } from '../models/request/SetEnabledRequest';

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

  constructor() {}

  ngOnInit(): void {}

  staffs: any = [
    { staffName: 'name1', staffUserName: 'usernmae1' },
    { staffName: 'name2', staffUserName: 'usernmae2' },
    { staffName: 'name3', staffUserName: 'usernmae3' },
  ];
}
