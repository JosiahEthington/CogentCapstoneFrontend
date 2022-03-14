import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
<<<<<<< Updated upstream
import { StaffLoginPageComponent } from './staff-login-page/staff-login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerAddAccountComponent } from './customer-add-account/customer-add-account.component';
import { CustomerAddBeneficiaryComponent } from './customer-add-beneficiary/customer-add-beneficiary.component';
import { CustomerRemoveBeneficiaryComponent } from './customer-remove-beneficiary/customer-remove-beneficiary.component';
import { CustomerTransferComponent } from './customer-transfer/customer-transfer.component';
import { CustomerUpdateProfileComponent } from './customer-update-profile/customer-update-profile.component';
import { CustomerAccountStatementComponent } from './customer-account-statement/customer-account-statement.component';
import { StaffAccountApprovalComponent } from './staff-account-approval/staff-account-approval.component';
import { StaffCustomerEnableComponent } from './staff-customer-enable/staff-customer-enable.component';
import { StaffAdjustAccountComponent } from './staff-adjust-account/staff-adjust-account.component';
import { StaffApproveBeneficiaryComponent } from './staff-approve-beneficiary/staff-approve-beneficiary.component';
import { AdminCreateStaffComponent } from './admin-create-staff/admin-create-staff.component';
import { AdminEnableStaffComponent } from './admin-enable-staff/admin-enable-staff.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdatePasswordComponent } from './update-password/update-password.component';
=======
import { RegisterationPageComponent } from './registeration-page/registeration-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CustomerUpdateProfileComponent } from './customer-update-profile/customer-update-profile.component';
import { CustomerTransferComponent } from './customer-transfer/customer-transfer.component';
import { StaffAccountApprovalComponent } from './staff-account-approval/staff-account-approval.component';
import { StaffAdjustAccountComponent } from './staff-adjust-account/staff-adjust-account.component';
import { StaffApproveBeneficiaryComponent } from './staff-approve-beneficiary/staff-approve-beneficiary.component';
import { StaffCustomerEnableComponent } from './staff-customer-enable/staff-customer-enable.component';
import { StaffLoginPageComponent } from './staff-login-page/staff-login-page.component';
import { AdminCreateStaffComponent } from './admin-create-staff/admin-create-staff.component';
import { AdminEnableStaffComponent } from './admin-enable-staff/admin-enable-staff.component';
import { CustomerRemoveBeneficiaryComponent } from './customer-remove-beneficiary/customer-remove-beneficiary.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerAddBeneficiaryComponent } from './customer-add-beneficiary/customer-add-beneficiary.component';
import { CustomerAddAccountComponent } from './customer-add-account/customer-add-account.component';
import { CustomerAccountStatementComponent } from './customer-account-statement/customer-account-statement.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
<<<<<<< Updated upstream
    StaffLoginPageComponent,
    RegistrationPageComponent,
    ForgotPasswordComponent,
    CustomerDashboardComponent,
    CustomerAddAccountComponent,
    CustomerAddBeneficiaryComponent,
    CustomerRemoveBeneficiaryComponent,
    CustomerTransferComponent,
    CustomerUpdateProfileComponent,
    CustomerAccountStatementComponent,
    StaffAccountApprovalComponent,
    StaffCustomerEnableComponent,
    StaffAdjustAccountComponent,
    StaffApproveBeneficiaryComponent,
    AdminCreateStaffComponent,
    AdminEnableStaffComponent,
    UpdatePasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
=======
    RegisterationPageComponent,
    ForgetPasswordComponent,
    CustomerUpdateProfileComponent,
    CustomerTransferComponent,
    StaffAccountApprovalComponent,
    StaffAdjustAccountComponent,
    StaffApproveBeneficiaryComponent,
    StaffCustomerEnableComponent,
    StaffLoginPageComponent,
    AdminCreateStaffComponent,
    AdminEnableStaffComponent,
    CustomerRemoveBeneficiaryComponent,
    CustomerDashboardComponent,
    CustomerAddBeneficiaryComponent,
    CustomerAddAccountComponent,
    CustomerAccountStatementComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
>>>>>>> Stashed changes
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
