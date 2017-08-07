import { UserModel } from '../model/user.model';
import * as user from '../action/user.action';
import { createSelector, createFeatureSelector, ActionReducer } from '@ngrx/store';

export interface UserState {
  loading: boolean;
  info: UserModel;
  weightRange: number[];
  fatRange: number[];
  muscleRange: number[];
}

const initialState: UserState = {
  loading: false,
  info: {
    email: '',
    uid: '',
    height: 0,
    age: 0,
    gender: ''
  },
  weightRange: [],
  fatRange: [],
  muscleRange: []
};

export const userReducer: ActionReducer<UserState> = (state = initialState, action: user.Actions) => {
  switch ( action.type ) {
    case user.ActionTypes.INIT_USER_INFO: {
      const userInfo = action.payload;
      return Object.assign({}, state, {
        info: Object.assign({}, state.info, userInfo)
      });
    }
    case user.ActionTypes.SAVE_USER_INFO: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case user.ActionTypes.SAVE_USER_INFO_COMPLETE: {
      const userInfo = action.payload;
      return Object.assign({}, state, {
        info: userInfo,
        loading: false
      });
    }
    case user.ActionTypes.LOAD_USER_INFO: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case user.ActionTypes.LOAD_USER_INFO_COMPLETE: {
      const userInfo = action.payload;
      return Object.assign({}, state, {
        info: userInfo,
        loading: false
      });
    }
    default:
      return state;
  }
}

export const getLoading = (state: UserState) => state.loading;
export const getUserInfo = (state: UserState) => state.info;
export const getUserUid = (state: UserState) => state.info.uid;

const userReducerSelector = createFeatureSelector('userReducer');

export const getUserInfoSelector = createSelector(userReducerSelector, getUserInfo);
