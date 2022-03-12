export class SignUpRequest {
  username: string;
  password: string;
  fullname: string;
  constructor() {
    this.password = '';
    this.username = '';
    this.fullname = '';
  }
}
