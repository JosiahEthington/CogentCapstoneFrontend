import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
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

  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    const user = this.tokenStorageService.getUser();
    if (this.isLoggedIn) {
      this.roles = user.roles;
      this.isAdmin = this.roles.includes('ROLE_ADMIN');
      this.isStaff = this.roles.includes('ROLE_STAFF');
      this.isCustomer = this.roles.includes('ROLE_CUSTOMER');
    }
    this.authService.getUserDetails().subscribe((jwtToken) => {
      if (jwtToken == null) {
        console.log('in subscribe null');
        this.roles = [];
        this.isLoggedIn = false;
        this.isStaff = false;
        this.isCustomer = false;
        this.isAdmin = false;
        this.username = '';
      } else {
        this.isLoggedIn = true;
        console.log('in subscribe');
        console.log(jwtToken);
        this.roles = jwtToken.roles;
        console.log(jwtToken.roles);
        this.isStaff = jwtToken.roles.includes('ROLE_STAFF');
        this.isCustomer = jwtToken.roles.includes('ROLE_CUSTOMER');
        this.isAdmin = jwtToken.roles.includes('ROLE_ADMIN');
        this.username = jwtToken.username;
      }
    });
    this.ref.detectChanges();
  }
  title = 'BankFrontend';
  today: Date = new Date();

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
