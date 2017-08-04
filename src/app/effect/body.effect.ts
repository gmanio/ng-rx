import { Injectable } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as bodyActions from '../action/body.action';
import { BodyModel } from "../model/body.model";
import { LoadBodyInfoCompleteAction } from '../action/body.action';
import { SaveUserInfoCompleteAction } from '../action/user.action';

@Injectable()
export class BodyEffect {
  @Effect() saveBodyInfo$ = this.actions$
    .ofType(bodyActions.ActionTypes.NEW_BODY_INFO)
    .map(toPayload)
    .switchMap((payload) => this.firebaseService.saveBodyInfo(payload))
    .map((res) => new BodyModel(res))
    .map((res) => new SaveUserInfoCompleteAction(res));

  @Effect() loadBodyInfo$ = this.actions$
    .ofType(bodyActions.ActionTypes.LOAD_BODY_INFO)
    .map(toPayload)
    .switchMap((payload) => this.firebaseService.loadBodyInfo())
    .map((res: BodyModel[]) => res.map(bodyInfo => new BodyModel(bodyInfo)))
    .map((res) => new LoadBodyInfoCompleteAction(res));


  constructor(private actions$: Actions,
              private firebaseService: FirebaseService) {
  }
}
