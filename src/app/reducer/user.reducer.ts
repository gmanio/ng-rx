import { UserModel } from '../model/user.model';
import * as user from '../action/user.action';

export interface State {
  loading: boolean;
  email: string;
  height: number;
  age: number;
  gender: string;
};

const initialState: State = {
  loading: false,
  email: '',
  height: 0,
  age: 0,
  gender: ''
};

export function reducer(state = initialState, action: user.Actions): State {
  switch ( action.type ) {
    case user.ActionTypes.SAVE_USER_INFO: {
      // const userInfo = action.payload;
      return Object.assign({}, state, {
        loading: true
      });
    }
    case user.ActionTypes.SAVE_USER_INFO_COMPLETE: {
      const userInfo = action.payload;
      return Object.assign({}, state, userInfo, {
        loading: false
      });
    }
    case user.ActionTypes.LOAD_USER_INFO: {
      return state;
    }
    case user.ActionTypes.LOAD_USER_INFO_COMPLETE: {
      return state;
    }
    default:
      return state;
  }
}

export const getLoading = (state: State) => state.loading;
export const getEmail = (state: State) => state.email;
export const getHeight = (state: State) => state.height;
export const getAge = (state: State) => state.age;
export const getGender = (state: State) => state.gender;
export const getUserInfo = (state: State) => {
  return {
    email: state.email,
    height: state.height,
    age: state.age,
    gender: state.gender
  }
};
