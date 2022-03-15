import { Component, OnInit } from '@angular/core';
import { CreateStaffRequest } from '../models/request/CreateStaffRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create-staff',
  templateUrl: './admin-create-staff.component.html',
  styleUrls: ['./admin-create-staff.component.css'],
})
export class AdminCreateStaffComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}
  createStaffRequest: CreateStaffRequest = new CreateStaffRequest();
  createStaff(): void {
    this.router.navigate(['/staffLogin']);
  }

}
