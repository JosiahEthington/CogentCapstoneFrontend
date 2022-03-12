export class JwtResponse {
  token: string = '';
  type: string = 'Bearer';
  id: number = 0;
  username: string = '';
  roles: any = {};
}
