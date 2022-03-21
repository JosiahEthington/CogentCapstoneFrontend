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
  errorMessage = 'Login Failed';
  roles: string[] = [];
  ngOnInit(): void {}

  loginRequest: LoginRequest = new LoginRequest();
  customerLogin(): void {
    console.log('Signing in');
    if (this.isLoginFailed) {
      alert(this.errorMessage);
      this.isLoginFailed = false;
    }
    const { username, password } = this.loginRequest;
    this.authService.customerLogin(username, password).subscribe((data) => {
      console.log('data: ');
      console.log(data);

      this.customerId = data.id;
      this.tokenStorage.saveUser(data);
      this.roles = this.tokenStorage.getUser().roles;
      //if(data.status ==)
      if (this.roles.includes('ROLE_CUSTOMER')) {
        this.tokenStorage.saveToken(data.token);
        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.router.navigate(['/customerDashboard']).then(() => {
          window.location.reload();
        });
      } else {
        this.tokenStorage.signOut();
        this.isLoggedIn = false;
        this.isLoginFailed = true;
        alert('This user is not a customer, please use Staff login.');
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
