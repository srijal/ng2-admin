import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'core',
    loadChildren: 'app/+core/core.module'
  },
  {
    path: 'product',
    loadChildren: 'app/+product/product.module',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full'
  }
];

[

  { path: '', redirectTo: 'pages', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
