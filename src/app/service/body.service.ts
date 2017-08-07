import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../reducer';
import { Observable } from 'rxjs/Observable';
import { BodyModel } from '../model/body.model';
import DateHelper from '../helper/date.helper';

@Injectable()
export class BodyService {
  constructor(private store: Store<AppStore>) {

  }

  getSelectedDate(): Observable<number> {
    return this.store.select(reducerMap => reducerMap.bodyReducer.selectedDate);
  }

  getSelectedWeek(): Observable<number> {
    return this.store.select(reducerMap => reducerMap.bodyReducer.selectedWeek);
  }

  getSelectedMonth(): Observable<number> {
    return this.store.select(reducerMap => reducerMap.bodyReducer.selectedMonth);
  }

  getBodyInfoList(): Observable<BodyModel[]> {
    return this.store.select(reducerMap => reducerMap.bodyReducer.entities);
  }

  getBodyInfoSelectedDate() {
    return Observable.combineLatest(
      this.store.select(reducerMap => reducerMap.bodyReducer.entities),
      this.store.select(reducerMap => reducerMap.bodyReducer.selectedDate),
      (bodyList, selectedDate) => {
        return bodyList.find((body) => DateHelper.isSameDay(body.date, selectedDate));
      });
  }

  getBodyInfoSelectedWeek(): Observable<any> {
    return Observable.combineLatest(
      this.store.select(reducerMap => reducerMap.bodyReducer.entities),
      this.store.select(reducerMap => reducerMap.bodyReducer.selectedWeek),
      (bodyList, selectedWeek) => {
        const current = DateHelper.removeTime(selectedWeek);
        const next = DateHelper.removeTime(selectedWeek).setDate(current.getDate() + 1);
        const prev = DateHelper.removeTime(selectedWeek).setDate(current.getDate() - 6);
        const prevIndex = bodyList.findIndex((body) => prev <= body.date);
        const lastVal = bodyList.filter((body) => next > body.date).pop();
        const currentIndex = bodyList.findIndex((body) => lastVal.date === body.date);

        return bodyList.slice(prevIndex, currentIndex + 1);
      })
  }

  getBodyInfoSelectedMonth() {
    return Observable.combineLatest(
      this.store.select(reducerMap => reducerMap.bodyReducer.entities),
      this.store.select(reducerMap => reducerMap.bodyReducer.selectedMonth),
      (bodyList, selectedMonth) => {
        const current = DateHelper.removeTime(selectedMonth);
        const next = DateHelper.removeTime(selectedMonth).setDate(current.getDate() + 1);
        const prev = DateHelper.removeTime(selectedMonth).setMonth(current.getMonth() - 1);
        const prevIndex = bodyList.findIndex((body) => prev <= body.date);
        const lastVal = bodyList.filter((body) => next > body.date).pop();
        const currentIndex = bodyList.findIndex((body) => lastVal.date === body.date);

        return bodyList.slice(prevIndex, currentIndex + 1);
      })
  }
}
