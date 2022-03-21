import { Component, OnInit } from '@angular/core';
import { CreateStaffRequest } from '../models/request/CreateStaffRequest';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-admin-create-staff',
  templateUrl: './admin-create-staff.component.html',
  styleUrls: ['./admin-create-staff.component.css'],
})
export class AdminCreateStaffComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  confirmedPassword: string = '';
  ngOnInit(): void {}
  createStaffRequest: CreateStaffRequest = new CreateStaffRequest();
  createStaff(): void {
    const { staffFullName, staffUserName, staffPassword } =
      this.createStaffRequest;
    if (staffPassword == this.confirmedPassword) {
      this.authService
        .createStaff(staffFullName, staffUserName, staffPassword)
        .subscribe();
      alert('Staff Added Successfully!');
      window.location.reload();
    } else {
      alert('Password not match');
    }

    // this.router.navigate(['/staffLogin']);
  }
}
