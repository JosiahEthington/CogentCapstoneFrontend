import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { SetEnabledRequest } from '../models/request/SetEnabledRequest';

const API_URL = 'http://localhost:9015/api/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  //--------------------------------CustomerController--------------------------------
  //CustomerController createAccount
  postAddAccount(customerId: number, body: any): Observable<any> {
    //console.log('Body of add Acount request: ');
    //console.log(body);
    //console.log(JSON.stringify(body));
    return this.http.post(
      `${API_URL + 'customer'}/${customerId}/account`,
      body
    );
  }

  //CustomerController approveAccount
  staffApproveAccount(
    customerId: number,
    accountNumber: number,
    value: any
  ): Observable<any> {
    return this.http.put(
      `${API_URL + 'customer/' + customerId + '/account/' + accountNumber}`,
      value
    );
  }

  setEnabled(setEnabledRequest: SetEnabledRequest): Observable<any> {
    console.log('Setting Enabled: ' + setEnabledRequest.status);
    return this.http.put(
      `${API_URL + 'customer/accountStatus'}`,
      setEnabledRequest,
      { responseType: 'text' }
    );
  }

  //CustomerController getAccounts
  getDashboard(customerId: number): Observable<any> {
    return this.http
      .get(`${API_URL + 'customer/' + customerId}/account`)
      .pipe();
  }

  //CustomerController getCustomer
  getListCustomers(customerId: number): Observable<any> {
    return this.http.get(API_URL + 'customer/' + customerId);
  }

  //  getCustomerAccount
  getAccountDetails(
    customerId: number,
    accountNumber: number
  ): Observable<any> {
    return this.http.get(
      `${API_URL + 'customer/' + customerId + '/account/' + accountNumber}`
    );
  }

  //CustomerController updateCustomer
  updateCustomer(customerId: number, body: any): Observable<any> {
    return this.http.put(API_URL + 'customer/' + customerId, body);
  }

  //CustomerController addBeneficiary
  postAddBeneficiary(customerId: number, body: any): Observable<any> {
    return this.http.post(
      API_URL + 'customer/' + customerId + '/beneficiary',
      body,
      { responseType: 'text' }
    );
  }

  //CustomerController getBeneficiaries
  getListBeneficiary(customerId: number): Observable<any> {
    return this.http.get(API_URL + 'customer/' + customerId + '/beneficiary');
  }
  getActiveBeneficiaries(customerId: number): Observable<any> {
    return this.http.get(
      API_URL + 'customer/' + customerId + '/activeBeneficiary'
    );
  }

  //CustomerController deleteBeneficiary
  deleteRemoveBeneficiary(
    customerId: number,
    beneficiaryId: any
  ): Observable<any> {
    console.log(beneficiaryId);
    return this.http.delete(
      `${API_URL + 'customer/' + customerId + '/beneficiary/' + beneficiaryId}`,
      { responseType: 'text' }
    );
  }

  //CustomerController transferFunds
  transferFunds(body: any): Observable<any> {
    return this.http.put(`${API_URL + 'customer/transfer'}`, body, {
      responseType: 'text',
    });
  }

  // @GetMapping("/account/{accountNo}")
  // public ResponseEntity<?> getAccountDetails(@PathVariable("accountNo") Long accountNo) {
  // 	return ResponseEntity.ok(staffService.getAccountDetails(accountNo));
  // }

  staffGetAccountDetails(accountNumber: number): Observable<any> {
    //console.log(`${API_URL + 'staff/account/' + accountNumber}`);
    return this.http.get(`${API_URL + 'staff/account/' + accountNumber}`);
  }

  // @GetMapping("/beneficiary")
  // public ResponseEntity<?> getUnapprovedBeneficiaries() {
  // 	return ResponseEntity.ok(staffService.getUnapprovedBeneficiaries());
  // }
  staffGetUnapprovedBeneficiaries(): Observable<any> {
    return this.http.get(`${API_URL + 'staff/beneficiary'}`);
  }
  // @PutMapping("/beneficiary")
  // public ResponseEntity<?> approveBeneficiary(@RequestBody ApproveBeneficiaryRequest request) {
  // 	return ResponseEntity.ok(staffService.approveBeneficiary(request));
  // }
  staffApproveBeneficiary(body: any): Observable<any> {
    return this.http.put(`${API_URL + 'staff/beneficiary'}`, body);
  }
  // @GetMapping("/accounts/approve")
  // public ResponseEntity<?> getUnapprovedAccounts() {
  // 	return ResponseEntity.ok(staffService.getUnapprovedAccounts());
  // }
  staffGetUnapprovedAccounts(): Observable<any> {
    return this.http.get(`${API_URL + 'staff/accounts/approve'}`);
  }
  // @PutMapping("/accounts/approve")
  // public ResponseEntity<?> approveAccount(@RequestBody ApproveAccountRequest request) {
  // 	return ResponseEntity.ok(staffService.approveAccount(request));
  // }
  staffApproveListOfAccount(body: any): Observable<any> {
    return this.http.put(`${API_URL + 'staff/accounts/approve'}`, body);
  }

  // @GetMapping("/customer")
  // public ResponseEntity<?> listCustomers() {
  // 	return ResponseEntity.ok(staffService.getCustomers());
  // }
  staffGetListCustomer(): Observable<any> {
    return this.http.get(`${API_URL + 'staff/customer'}`);
  }
  // @PutMapping("/customer")
  // public ResponseEntity<?> setCustomerEnabled(@RequestBody SetEnabledRequest request) {
  // 	return ResponseEntity.ok(staffService.setCustomerEnabled(request));
  // }
  staffSetCustomerEnabled(body: any): Observable<any> {
    return this.http.put(`${API_URL + 'staff/customer'}`, body, {
      responseType: 'text',
    });
  }
  // @GetMapping("/customer/{customerID}")
  // public ResponseEntity<?> getCustomer(@PathVariable("customerID") Long customerId) {
  // 	return ResponseEntity.ok(staffService.getCustomer(customerId));
  // }
  staffGetCustomer(customerId: number): Observable<any> {
    return this.http.get(`${API_URL + 'staff/customer/' + customerId}`);
  }
  // @PutMapping("/transfer")
  // public ResponseEntity<?> staffTransfer(@RequestBody TransferRequestStaff request) {
  // 	return ResponseEntity.ok(staffService.staffTransferFunds(request));
  // }
  staffTransferFunds(body: any): Observable<any> {
    return this.http.put(`${API_URL + 'staff/transfer'}`, body, {
      responseType: 'text',
    });
  }

  //--------------------------------StaffController--------------------------------
  //  @GetMapping("/staff")
  //  public ResponseEntity<?> listStaff() {
  //    return ResponseEntity.ok(adminService.getAllStaff());
  //  }
  adminListStaff(): Observable<any> {
    return this.http.get(`${API_URL + 'admin/staff'}`);
  }
  //  @PutMapping("/staff")
  //  public ResponseEntity<?> setStaffEnabled(@RequestBody SetEnabledRequest request) {
  //    return ResponseEntity.ok(adminService.setEnabled(request));
  //  }
  adminSetStaffEnabled(body: any): Observable<any> {
    return this.http.put(`${API_URL + 'admin/staff'}`, body, {
      responseType: 'text',
    });
  }
}
