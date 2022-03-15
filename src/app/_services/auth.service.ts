import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:9015/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  customerLogin(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'customer/authenticate',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  staffLogin(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'staff/authenticate',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  adminLogin(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'admin/authenticate',
      {
        username,
        password,
      },
      httpOptions
    );
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
