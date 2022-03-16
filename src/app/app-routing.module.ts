import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
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
import { StaffLoginPageComponent } from './staff-login-page/staff-login-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
  {
    path: 'customerDashboard',
    component: CustomerDashboardComponent,
  },
  {
    path: 'customerAddAccount',
    component: CustomerAddAccountComponent,
  },
  {
    path: 'customerAddBeneficiary',
    component: CustomerAddBeneficiaryComponent,
  },
  {
    path: 'customerRemoveBeneficiary',
    component: CustomerRemoveBeneficiaryComponent,
  },
  {
    path: 'customerTransfer',
    component: CustomerTransferComponent,
  },
  {
    path: 'customerUpdate',
    component: CustomerUpdateProfileComponent,
  },
  {
    path: 'customerAccountStatement/:accountNumber',
    component: CustomerAccountStatementComponent,
  },
  { path: 'staffAccountApproval', component: StaffAccountApprovalComponent },
  { path: 'staffCustomerEnable', component: StaffCustomerEnableComponent },
  {
    path: 'staffApproveBeneficiary',
    component: StaffApproveBeneficiaryComponent,
  },
  { path: 'staffAdjustAccount', component: StaffAdjustAccountComponent },
  { path: 'adminCreateStaff', component: AdminCreateStaffComponent },
  { path: 'adminEnableStaff', component: AdminEnableStaffComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'staffLogin', component: StaffLoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
