export class ApproveBeneficiaryRequest {
  beneficiaryId: number = 0;
  beneficiaryAccount: number = 0;
  beneficiaryAddedDate: Date = new Date();
  approved: string = '';
}
