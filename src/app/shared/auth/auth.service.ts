import {Injectable} from '@angular/core';
import {AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods, AngularFire} from 'angularfire2';

import {AuthModel} from '../interfaces/auth.interface';
import {User} from '../interfaces/user.interface';

@Injectable()
export class AuthService {

  public authState: FirebaseAuthState = null;

  constructor(public af: AngularFire, public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get isUserAuthenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.isUserAuthenticated ? this.authState.uid : '';
  }

  get email(): any {
    return this.isUserAuthenticated ? this.authState.uid : undefined;
  }

  get displayName(): any {
    console.log('123' + this.authState);
    return this.isUserAuthenticated ? this.authState : undefined;
  }

  createUser(model: AuthModel) {
    return this.auth$.createUser(
      {
        email: model.email,
        password: model.password
      });
    // .catch(error => console.log('ERROR @ AuthService#createUser() :', error));
  }

  signIn(provider: number) {
    return this.auth$.login({provider});
    // .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  createUserDetails(uid: string, userDetails: any) {
    firebase.database().ref('member').child(uid).set({
      active: true,
      admin: false,
      first: userDetails.first,
      last: userDetails.last,
      username: userDetails.username,
      role: userDetails.role,
      email: userDetails.email
    });
  }

  signUp(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then(
      (user: User) => this.createUserDetails(user.uid, user),
      (error: any) => console.log(error)
    );
  }

  signInWithGithub() {
    return this.signIn(AuthProviders.Github);
  }

  signInWithFacebook() {
    return this.signIn(AuthProviders.Facebook);
  }

  signInWithGoogle() {
    return this.signIn(AuthProviders.Google);
  }

  signInWithTwitter() {
    return this.signIn(AuthProviders.Twitter);
  }

  signInWithPassword(loginModel: any) {
    return this.auth$.login(loginModel, {
      provider: AuthProviders.Password, method: AuthMethods.Password
    });
  }


  sendResetPasswordEmail(email: string, callback: any): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email).then(
      () => callback(),
      (error: any) => callback(error)
    );
  }

  // changePassword(credentials: any): Promise<void> {
  //   return new Promise<void>((resolve, reject) => {
  //     this._firebase.changePassword(credentials, error => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         resolve();
  //       }
  //     });
  //   });
  // }

  // changeEmail(credentials: any): Promise<void> {
  //   return new Promise<void>((resolve, reject) => {
  //     this._firebase.changeEmail(credentials, error => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         resolve();
  //       }
  //     });
  //   });
  // }

  signOut(): void {
    this.auth$.logout();
  }
}
