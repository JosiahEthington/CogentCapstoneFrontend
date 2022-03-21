import { Role } from './Role';

export class User {
  id: number = 0;
  username: string = '';
  fullname: string = '';
  password: string = '';
  roles: Role[] = [];
  status: string = '';
}
