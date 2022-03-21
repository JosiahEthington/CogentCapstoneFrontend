import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpRequest } from '../models/request/SignUpRequest';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}
  signUpRequest: SignUpRequest = new SignUpRequest();
  confirmPassword: any = '';
  ngOnInit(): void {}
  async customerSignUp(): Promise<void> {
    if (this.confirmPassword != this.signUpRequest.password) {
      alert("Passwords don't match");
    } else {
      this.authService
        .registerCustomer(
          this.signUpRequest.username,
          this.signUpRequest.fullname,
          this.signUpRequest.password
        )
        .subscribe();
      await new Promise((r) => setTimeout(r, 500));
      this.authService
        .customerLogin(this.signUpRequest.username, this.signUpRequest.password)
        .subscribe((data) => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          this.router.navigate(['/customerDashboard']).then(() => {
            window.location.reload();
          });
        });
    }
  }
}
