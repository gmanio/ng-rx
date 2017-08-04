import { UserModel } from '../model/user.model';
import * as user from '../action/user.action';

export interface State {
  loading: boolean;
  info: UserModel;
  weightRange: number[];
  fatRange: number[];
  muscleRange: number[];
};

const initialState: State = {
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

export function reducer(state = initialState, action: user.Actions): State {
  switch ( action.type ) {
    case user.ActionTypes.INIT_USER_INFO: {
      const userInfo = action.payload;
      return Object.assign({}, state, {
        info: userInfo,
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

export const getLoading = (state: State) => state.loading;
export const getUserInfo = (state: State) => state.info;
export const getUserUid = (state: State) => state.info.uid;
