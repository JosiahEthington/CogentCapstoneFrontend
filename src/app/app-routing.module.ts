import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< Updated upstream
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
import { UpdatePasswordComponent } from './update-password/update-password.component';
const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent },
=======
import { AdminCreateStaffComponent } from './admin-create-staff/admin-create-staff.component';
import { AdminEnableStaffComponent } from './admin-enable-staff/admin-enable-staff.component';
import { CustomerAccountStatementComponent } from './customer-account-statement/customer-account-statement.component';
import { CustomerAddAccountComponent } from './customer-add-account/customer-add-account.component';
import { CustomerAddBeneficiaryComponent } from './customer-add-beneficiary/customer-add-beneficiary.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerRemoveBeneficiaryComponent } from './customer-remove-beneficiary/customer-remove-beneficiary.component';
import { CustomerTransferComponent } from './customer-transfer/customer-transfer.component';
import { CustomerUpdateProfileComponent } from './customer-update-profile/customer-update-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterationPageComponent } from './registeration-page/registeration-page.component';
import { StaffAccountApprovalComponent } from './staff-account-approval/staff-account-approval.component';
import { StaffAdjustAccountComponent } from './staff-adjust-account/staff-adjust-account.component';
import { StaffApproveBeneficiaryComponent } from './staff-approve-beneficiary/staff-approve-beneficiary.component';
import { StaffCustomerEnableComponent } from './staff-customer-enable/staff-customer-enable.component';
import { StaffLoginPageComponent } from './staff-login-page/staff-login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'register', component: RegisterationPageComponent },
>>>>>>> Stashed changes
  { path: 'customerDashboard', component: CustomerDashboardComponent },
  { path: 'customerAddAccount', component: CustomerAddAccountComponent },
  {
    path: 'customerAddBeneficiary',
    component: CustomerAddBeneficiaryComponent,
  },
<<<<<<< Updated upstream
=======
  { path: 'customerTransfer', component: CustomerTransferComponent },
>>>>>>> Stashed changes
  {
    path: 'customerRemoveBeneficiary',
    component: CustomerRemoveBeneficiaryComponent,
  },
<<<<<<< Updated upstream
  { path: 'customerTransfer', component: CustomerTransferComponent },
  { path: 'customerUpdate', component: CustomerUpdateProfileComponent },
=======
>>>>>>> Stashed changes
  {
    path: 'customerAccountStatement',
    component: CustomerAccountStatementComponent,
  },
<<<<<<< Updated upstream
  { path: 'staffAccountApproval', component: StaffAccountApprovalComponent },
  { path: 'staffCustomerEnable', component: StaffCustomerEnableComponent },
=======
  { path: 'customerUpdateProfile', component: CustomerUpdateProfileComponent },
  { path: 'adminCreateStaff', component: AdminCreateStaffComponent },
  { path: 'adminEnableStaff', component: AdminEnableStaffComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'staffAccountApproval', component: StaffAccountApprovalComponent },
  { path: 'staffAdjustAccount', component: StaffAdjustAccountComponent },
>>>>>>> Stashed changes
  {
    path: 'staffApproveBeneficiary',
    component: StaffApproveBeneficiaryComponent,
  },
<<<<<<< Updated upstream
  { path: 'adminCreateStaff', component: AdminCreateStaffComponent },
  { path: 'adminEnableStaff', component: AdminEnableStaffComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'staffLogin', component: StaffLoginPageComponent },
  { path: 'updatePassword', component: UpdatePasswordComponent },
=======
  { path: 'staffCustomerEnable', component: StaffCustomerEnableComponent },
  { path: 'staffLoginPage', component: StaffLoginPageComponent },
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
