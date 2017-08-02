import { Action } from '@ngrx/store';
import { UserModel } from '../model/user.model';

export const ActionTypes = {
  SAVE_USER_INFO: 'Save user information',
  SAVE_USER_INFO_COMPLETE: 'Save user information complete',
  LOAD_USER_INFO: 'Load user information',
  LOAD_USER_INFO_COMPLETE: 'Load user information complete'
};

export class SaveUserInfoAction implements Action {
  type = ActionTypes.SAVE_USER_INFO;

  constructor(public payload: UserModel) {
  }
}

export class SaveUserInfoCompleteAction implements Action {
  type = ActionTypes.SAVE_USER_INFO_COMPLETE;

  constructor(public payload: UserModel) {
  }
}

export class LoadUserInfoAction implements Action {
  type = ActionTypes.LOAD_USER_INFO;

  constructor(public payload: string) {
  }
}

export class LoadUserInfoCompleteAction implements Action {
  type = ActionTypes.LOAD_USER_INFO_COMPLETE;

  constructor(public payload: UserModel) {
  }
}

export type Actions =
  SaveUserInfoAction |
  SaveUserInfoCompleteAction |
  LoadUserInfoAction |
  LoadUserInfoCompleteAction;
