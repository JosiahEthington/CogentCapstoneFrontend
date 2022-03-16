import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAccountRequest } from '../models/request/CreateAccountRequest';

const API_URL = 'http://localhost:9015/api/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getAccountDetails(
    customerId: number,
    accountNumber: number
  ): Observable<any> {
    return this.http.get(
      `${API_URL + 'customer/' + customerId + '/account/' + accountNumber}`
    );
  }
  constructor(private http: HttpClient) {}

  getDashboard(customerId: number): Observable<any> {
    return this.http.get(`${API_URL + 'customer/' + customerId}/account`);
  }

  postAddAccount(customerId: number, body: any): Observable<any> {
    console.log('Body of add Acount request: ');
    console.log(body);
    console.log(JSON.stringify(body));
    return this.http.post(
      `${API_URL + 'customer'}/${customerId}/account`,
      body
    );
  }

  getAddBeneficiary(): Observable<any> {
    return this.http.get(API_URL + 'customerAddBeneficiary');
  }

  getRemoveBeneficiary(): Observable<any> {
    return this.http.get(API_URL + 'customerRemoveBeneficiary');
  }
}
