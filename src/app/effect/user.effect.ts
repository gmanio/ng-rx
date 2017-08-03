import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import * as userActions from '../action/user.action';
import { SaveUserInfoCompleteAction } from '../action/user.action';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserEffect {
  @Effect() loadUserInfo$ = this.actions$
    .ofType(userActions.ActionTypes.SAVE_USER_INFO)
    .map(toPayload)
    .map((payload) => new SaveUserInfoCompleteAction(payload))
    // .catch(() => Observable.of(new LoadUserInfoCompleteAction({})))

  constructor(private actions$: Actions) {
  }
}
