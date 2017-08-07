// import * as fromBody from './body.reducer';
// import * as fromUser from './user.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from './user.reducer';
import { bodyReducer, BodyState } from './body.reducer';

export interface State {
  userReducer: UserState;
  bodyReducer: BodyState;
}

export const reducers: ActionReducerMap<State> = { userReducer, bodyReducer }

// export const getUser = (state: BodyState) => state.user;
// export const getBody = (state: State) => state.bodyReducer;

// export const getBodyInfoList = createSelector(getBody, getEnities);
// export const getSelectedDate = createSelector(getBody, getSelectedDate);
// export const getSelectedBodyInfo = createSelector(getBody, getSelectedBodyInfo);
// export const getBodyInfoListWeek = createSelector(getBody, fromBody.getBodyInfoListWeek);
// export const getBodyInfoListMonth = createSelector(getBody, fromBody.getBodyInfoListMonth);

// export const getUserInfo = createSelector(getUser, fromUser.getUserInfo);

