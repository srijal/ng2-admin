export interface IUser {
  uid?: any;
  email: string;
  password: string;
  confirmPassword?: string;
}

export class User implements IUser {

  uid: string;
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
