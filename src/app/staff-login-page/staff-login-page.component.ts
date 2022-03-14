import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../models/request/LoginRequest';

@Component({
  selector: 'app-staff-login-page',
  templateUrl: './staff-login-page.component.html',
  styleUrls: ['./staff-login-page.component.css'],
})
export class StaffLoginPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
  loginRequest: LoginRequest = new LoginRequest();

  staffLogin(): void {}
}
