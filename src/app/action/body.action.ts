import { Action } from '@ngrx/store';
import { BodyModel } from '../model/body.model';

export const ActionTypes = {
  NEW_BODY_INFO: 'New body information',
  NEW_BODY_INFO_COMPLETE: 'New body information complete',
  UPDATE_BODY_INFO: 'Update body information',
  UPDATE_BODY_INFO_COMPLETE: 'Update body information complete',
  LOAD_BODY_INFO: 'Load body information',
  LOAD_BODY_INFO_COMPLETE: 'Load body information complete'
};

export class NewBodyInfoAction implements Action {
  type = ActionTypes.NEW_BODY_INFO;

  constructor(public payload: BodyModel) {
  }
}

export class NewBodyInfoActionComplete implements Action {
  type = ActionTypes.NEW_BODY_INFO_COMPLETE;

  constructor(public payload: BodyModel) {
  }
}

export class UpdateBodyInfoAction implements Action {
  type = ActionTypes.UPDATE_BODY_INFO;

  constructor(public payload: BodyModel) {
  }
}

export class UpdateBodyInfoActionComplete implements Action {
  type = ActionTypes.UPDATE_BODY_INFO_COMPLETE;

  constructor(public payload: BodyModel) {
  }
}

export class LoadBodyInfoAction implements Action {
  type = ActionTypes.LOAD_BODY_INFO;

  constructor(public payload: string) {
  }
}

export class LoadBodyInfoCompleteAction implements Action {
  type = ActionTypes.LOAD_BODY_INFO_COMPLETE;

  constructor(public payload: BodyModel[]) {
  }
}

export type Actions =
  NewBodyInfoAction |
  NewBodyInfoActionComplete |
  UpdateBodyInfoAction |
  UpdateBodyInfoActionComplete |
  LoadBodyInfoAction |
  LoadBodyInfoCompleteAction;
