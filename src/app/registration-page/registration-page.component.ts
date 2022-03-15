import { Component, OnInit } from '@angular/core';
import { SignUpRequest } from '../models/request/SignUpRequest';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  constructor(private authService: AuthService) {}
  signUpRequest: SignUpRequest = new SignUpRequest();
  ngOnInit(): void {}
  customerSignUp(): void {
    this.authService
      .registerCustomer(
        this.signUpRequest.username,
        this.signUpRequest.fullname,
        this.signUpRequest.password
      )
      .subscribe();
  }
}
