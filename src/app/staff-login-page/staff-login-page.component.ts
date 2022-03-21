import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/request/LoginRequest';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-staff-login-page',
  templateUrl: './staff-login-page.component.html',
  styleUrls: ['./staff-login-page.component.css'],
})
export class StaffLoginPageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  isLoggedIn = false;
  staffId = 1;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  ngOnInit(): void {}

  loginRequest: LoginRequest = new LoginRequest();
  staffLogin(): void {
    console.log('Staff Signing in');
    const { username, password } = this.loginRequest;
    this.authService.staffLogin(username, password).subscribe((data) => {
      //console.log('Token:');
      //console.log(data.token);
      //console.log('User: ');
      //console.log(data);
      this.staffId = data.id;
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      //console.log(this.roles.length);
      this.router.navigate(['staffDashboard']).then(() => {
        window.location.reload();
      });
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}
