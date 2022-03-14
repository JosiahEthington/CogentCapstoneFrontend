import { Component, OnInit } from '@angular/core';
import { SignUpRequest } from '../models/request/SignUpRequest';

@Component({
  selector: 'app-registeration-page',
  templateUrl: './registeration-page.component.html',
  styleUrls: ['./registeration-page.component.css'],
})
export class RegisterationPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  signUpRequest: SignUpRequest = new SignUpRequest();
  customerSignUp(): void {}
}
