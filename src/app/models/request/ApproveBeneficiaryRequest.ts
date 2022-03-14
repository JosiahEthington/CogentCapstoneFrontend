export class ApproveBeneficiaryRequest {
  fromCustomer: number = 0;
  toCustomer: number = 0;
  beneficiaryAddedDate: Date = new Date();
  approved: string = '';
}
