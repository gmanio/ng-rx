import { EventEmitter, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';
import { Store } from '@ngrx/store';
import * as userAction from '../../action/user.action';
import { UserModel } from '../../model/user.model';
import { AppStore } from '../../reducer/index';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private firebaseService: FirebaseService,
              private store: Store<AppStore>,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const authEmitter$ = new EventEmitter();

    this.firebaseService
      .getAuth()
      .onAuthStateChanged(authEmitter$);

    return authEmitter$
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if ( !authenticated ) {
          this.router.navigate(['/login']);

          return false;
        }

        const oCurrentUserInfo = new UserModel(this.firebaseService.getCurrentUser());
        const oInitUserInfoAction = new userAction.InitUserInfoAction(oCurrentUserInfo);
        this.store.dispatch(oInitUserInfoAction);

        return true;
      });
  }
}
