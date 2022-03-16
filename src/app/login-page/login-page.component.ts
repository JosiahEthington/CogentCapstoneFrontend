import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/request/LoginRequest';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  isLoggedIn = false;
  customerId = 1;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  ngOnInit(): void {}

  loginRequest: LoginRequest = new LoginRequest();
  customerLogin(): void {
    console.log('Signing in');
    const { username, password } = this.loginRequest;
    this.authService.customerLogin(username, password).subscribe((data) => {
      console.log('Token:');
      console.log(data.token);
      console.log('User: ');
      console.log(data);
      this.customerId = data.id;
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['customerDashboard']);
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
