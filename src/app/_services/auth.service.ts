import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:9015/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userDetails: BehaviorSubject<any | null> = new BehaviorSubject<
    any | null
  >(this.tokenStorageService.getUser());

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}
  getUserDetails(): Observable<any | null> {
    return this.userDetails.asObservable();
  }
  customerLogin(username: string, password: string): Observable<any> {
    return this.http
      .post(
        AUTH_API + 'customer/authenticate',
        {
          username,
          password,
        },
        httpOptions
      )
      .pipe(tap((result) => this.userDetails.next(result)));
  }
  staffLogin(username: string, password: string): Observable<any> {
    return this.http
      .post(
        AUTH_API + 'staff/authenticate',
        {
          username,
          password,
        },
        httpOptions
      )
      .pipe(tap((result) => this.userDetails.next(result)));
  }
  adminLogin(username: string, password: string): Observable<any> {
    return this.http
      .post(
        AUTH_API + 'admin/authenticate',
        {
          username,
          password,
        },
        httpOptions
      )
      .pipe(tap((result) => this.userDetails.next(result)));
  }
  registerCustomer(
    username: string,
    fullname: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'customer/register',
      { fullname, username, password },
      httpOptions
    );
  }
  createStaff(
    staffUserName: string,
    staffFullName: string,
    staffPassword: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'admin/staff',
      {
        staffFullName,
        staffUserName,
        staffPassword,
      },
      httpOptions
    );
  }
}
