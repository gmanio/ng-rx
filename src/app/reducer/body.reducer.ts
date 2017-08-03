import { createSelector } from '@ngrx/store';
import { BodyModel } from '../model/body.model';
import * as body from '../action/body.action';

export interface State {
  loading: boolean;
  selectedDate: number;
  selectedWeek: number;
  selectedMonth: number;
  entities: BodyModel[];
};

const initialState: State = {
  loading: false,
  selectedDate: new Date().getDate(),
  selectedWeek: new Date().getDate(),
  selectedMonth: new Date().getDate(),
  entities: []
};

export function reducer(state = initialState, action: body.Actions): State {
  switch ( action.type ) {
    case body.ActionTypes.NEW_BODY_INFO: {
      return state;
    }
    case body.ActionTypes.UPDATE_BODY_INFO: {
      return state;
    }
    case body.ActionTypes.LOAD_BODY_INFO: {
      return state;
    }
    case body.ActionTypes.LOAD_BODY_INFO_COMPLETE: {
      return state;
    }
    default:
      return state;
  }
}

export const getEnities = (state: State) => state.entities;
export const getSelectedDate = (state: State) => state.selectedDate;
export const getSelectedWeek = (state: State) => state.selectedWeek;
export const getSelectedMonth = (state: State) => state.selectedMonth;

export const getSelectedBodyInfo = createSelector(getEnities, getSelectedDate, (entities, selectedDate) => {
  return entities.find((body) => body.date === selectedDate);
});

export const getBodyInfoListWeek = createSelector(getEnities, getSelectedWeek, (entities, selectedWeek) => {

});
