import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from './user.reducer';
import { bodyReducer, BodyState } from './body.reducer';

export interface AppStore {
  userReducer: UserState;
  bodyReducer: BodyState;
}

export const reducers: ActionReducerMap<AppStore> = {
  userReducer,
  bodyReducer
};
