export interface ILoginModel {
  email: string;
  password: string;
  rememberMe: boolean;
}

export class LoginModel implements ILoginModel {

  email: string;
  password: string;
  rememberMe: boolean;

  constructor(email: string, password: string, rememberMe: boolean) {

    this.email = email;
    this.password= password;
    this.rememberMe = rememberMe;
  }
}
