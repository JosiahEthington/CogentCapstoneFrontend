import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  isCustomer = false;
  isAdmin = false;
  isStaff = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.isStaff = this.roles.includes('ROLE_STAFF');
      this.isCustomer = this.roles.includes('ROLE_CUSTOMER');
      this.isAdmin = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }
  }
  title = 'BankFrontend';
  today: Date = new Date();

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
