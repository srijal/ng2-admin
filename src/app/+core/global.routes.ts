import { Routes, RouterModule } from '@angular/router';

import {UserLoginComponent} from './login/login.component';
import {UserRegisterComponent} from './register/register.component';
import {UserResetPasswordComponent} from './reset-password/user-reset-password.component';

export const AuthRoutes: Routes = [
  {
    path: '/auth',
    component: GlobalComponent,
    children: [
      {path: 'login', component: UserLoginComponent},
      {path: 'reset-password', component: UserResetPasswordComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  }
];

export const GlobalRouting = RouterModule.forChild(GlobalRoutes);
