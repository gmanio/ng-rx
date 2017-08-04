import { createSelector } from '@ngrx/store';
import { BodyModel } from '../model/body.model';
import * as body from '../action/body.action';
import DateHelper from '../helper/date.helper';

export interface State {
  loading: boolean;
  selectedDate: number;
  selectedWeek: number;
  selectedMonth: number;
  entities: BodyModel[];
};

const initialState: State = {
  loading: false,
  selectedDate: new Date().getTime(),
  selectedWeek: new Date().getTime(),
  selectedMonth: new Date().getTime(),
  entities: []
};

export function reducer(state = initialState, action: body.Actions): State {
  switch ( action.type ) {
    case body.ActionTypes.NEW_BODY_INFO: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case body.ActionTypes.NEW_BODY_INFO_COMPLETE: {
      const bodyInfo = action.payload;
      return Object.assign({}, state, {
        entities: [...state.entities, bodyInfo],
        loading: false
      });
    }
    case body.ActionTypes.UPDATE_BODY_INFO: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case body.ActionTypes.UPDATE_BODY_INFO_COMPLETE: {
      const updateInfo = action.payload;
      return Object.assign({}, state, {
        entities: state.entities.map((bodyInfo) => {
          if ( DateHelper.isSameDay(bodyInfo.date, updateInfo) ) {
            return updateInfo;
          } else {
            return bodyInfo;
          }
        })
      });
    }
    case body.ActionTypes.LOAD_BODY_INFO: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case body.ActionTypes.LOAD_BODY_INFO_COMPLETE: {
      const bodyList = <BodyModel[]>action.payload;
      bodyList.sort((a, b) => a.date - b.date);
      return Object.assign({}, state, {
        entities: action.payload
      });
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
  return entities.find((body) => DateHelper.isSameDay(body.date, selectedDate));
});

export const getBodyInfoListWeek = createSelector(getEnities, getSelectedWeek, (entities, selectedWeek) => {
  const current = DateHelper.removeTime(selectedWeek);
  const next = current.setDate(current.getDate() + 1);
  const prev = current.setDate(current.getDate() - 7);
  const prevIndex = entities.findIndex((body) => prev <= body.date);
  const lastVal = entities.filter((body) => next > body.date).pop();
  const currentIndex = entities.findIndex((body) => lastVal.date === body.date);

  return entities.slice(prevIndex, currentIndex + 1);
});
export const getBodyInfoListMonth = createSelector(getEnities, getSelectedMonth, (entities, selectedMonth) => {
  const current = DateHelper.removeTime(selectedMonth);
  const next = current.setDate(current.getDate() + 1);
  const prev = current.setMonth(current.getMonth() - 1);
  const prevIndex = entities.findIndex((body) => prev <= body.date);
  const lastVal = entities.filter((body) => next > body.date).pop();
  const currentIndex = entities.findIndex((body) => lastVal.date === body.date);

  return entities.slice(prevIndex, currentIndex + 1);
});
