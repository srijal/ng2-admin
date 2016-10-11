import { AuthMethods }from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyAlh44-sGd54y10C3nzclDGRT-FniOOkOk',
  authDomain: 'sfw-backend.firebaseapp.com',
  databaseURL: 'https://sfw-backend.firebaseio.com',
  storageBucket: 'sfw-backend.appspot.com',
};

export const firebaseAuthConfig =  {
  method: AuthMethods.Popup,
  remember: 'default'
};
