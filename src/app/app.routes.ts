import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './container/login/login.component';
import { PageNotFoundComponent } from './component/error/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/input', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
]

export const RootRouter = RouterModule.forRoot(
  routes,
  /**
   *  Some browsers does not support HTML5 pushstate.
   */
  { useHash: true }
);
