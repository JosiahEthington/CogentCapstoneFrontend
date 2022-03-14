import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-enable-staff',
  templateUrl: './admin-enable-staff.component.html',
<<<<<<< Updated upstream
  styleUrls: ['./admin-enable-staff.component.css']
})
export class AdminEnableStaffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

=======
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
>>>>>>> Stashed changes
}
