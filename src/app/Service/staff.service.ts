import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  private baseUrl = 'http://localhost:9015/api/admin/';
  constructor(private _http: HttpClient) {}

  getAllStuff(): Observable<any> {
    return this._http.get(`${this.baseUrl + 'staff'}`);
  }
}
