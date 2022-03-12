import { Component, OnInit } from '@angular/core';
import { SignUpRequest } from '../models/request/SignUpRequest';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  signUpRequest: SignUpRequest = new SignUpRequest();
  customerSignUp(): void {}
}
