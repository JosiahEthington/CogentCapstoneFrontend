import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SetEnabledRequest } from '../models/request/SetEnabledRequest';
//import { StaffService } from '../Service/staff.service';
@Component({
  selector: 'app-admin-enable-staff',
  templateUrl: './admin-enable-staff.component.html',
  styleUrls: ['./admin-enable-staff.component.css'],
})
export class AdminEnableStaffComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  staffs: any = [
    { staffName: 'name1', staffUserName: 'username1' },
    { staffName: 'name2', staffUserName: 'username2' },
    { staffName: 'name3', staffUserName: 'username3' },
  ];
}
