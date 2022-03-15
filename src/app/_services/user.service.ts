import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAccountRequest } from '../models/request/CreateAccountRequest';

const API_URL = 'http://localhost:9015/api/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getDashboard(customerId: number): Observable<any> {
    return this.http.get(`${API_URL + customerId}/account`, {
      responseType: 'text',
    });
  }

  postAddAccount(customerId: number, body: any): Observable<any> {
    console.log(body);
    return this.http.post(
      `${API_URL + 'customer'}/${customerId}/account`,
      body
    );
  }

  getAddBeneficiary(): Observable<any> {
    return this.http.get(API_URL + 'customerAddBeneficiary', {
      responseType: 'text',
    });
  }

  getRemoveBeneficiary(): Observable<any> {
    return this.http.get(API_URL + 'customerRemoveBeneficiary', {
      responseType: 'text',
    });
  }
}
