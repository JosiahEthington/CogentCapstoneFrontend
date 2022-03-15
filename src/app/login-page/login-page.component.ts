import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../models/request/LoginRequest';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  loginRequest: LoginRequest = new LoginRequest();
  customerLogin(): void {}
}
