import * as fromBody from './body.reducer';
import * as fromUser from './user.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface State {
  body: fromBody.State;
  user: fromUser.State;
};

export const reducers: ActionReducerMap<State> = {
  body: fromBody.reducer,
  user: fromUser.reducer
};

export const getUser = (state: State) => state.user;
export const getBody = (state: State) => state.body;

export const getBodyInfoList = createSelector(getBody, fromBody.getEnities);
export const getSelectedDate = createSelector(getBody, fromBody.getSelectedDate);
export const getSelectedBodyInfo = createSelector(getBody, fromBody.getSelectedBodyInfo);
export const getBodyInfoListWeek = createSelector(getBody, fromBody.getBodyInfoListWeek);
export const getBodyInfoListMonth = createSelector(getBody, fromBody.getBodyInfoListMonth);

export const getUserInfo = createSelector(getUser, fromUser.getUserInfo);



