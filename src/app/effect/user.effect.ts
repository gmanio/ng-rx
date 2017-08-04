import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import * as userActions from '../action/user.action';
import { LoadUserInfoCompleteAction, SaveUserInfoCompleteAction } from '../action/user.action';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../service/firebase.service';
import { UserModel } from '../model/user.model';

@Injectable()
export class UserEffect {
  @Effect() saveUserInfo$ = this.actions$
    .ofType(userActions.ActionTypes.SAVE_USER_INFO)
    .map(toPayload)
    .switchMap((payload) => this.firebaseService.saveUserInfo(payload))
    .map((res) => new UserModel(res))
    .map((res) => new SaveUserInfoCompleteAction(res));
    // .catch(() => Observable.of(new LoadUserInfoCompleteAction({})))

  @Effect() loadUserInfo$ = this.actions$
    .ofType(userActions.ActionTypes.LOAD_USER_INFO)
    .map(toPayload)
    .switchMap((payload) => this.firebaseService.loadUserInfo())
    .map((res) => new UserModel(res))
    .map((res) => new LoadUserInfoCompleteAction(res));

  constructor(private actions$: Actions,
              private firebaseService: FirebaseService) {
  }
}
