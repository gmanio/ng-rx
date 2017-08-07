import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../reducer';
import { UserModel } from '../model/user.model';
import { SaveUserInfoAction } from '../action/user.action';

@Injectable()
export class UserService {
  constructor(private store: Store<AppStore>) {
  }

  getLoading() {
    return this.store.select(reducerMap => reducerMap.userReducer.loading);
  }

  getUserInfo() {
    return this.store.select(reducerMap => reducerMap.userReducer.info);
  }

  getUserUid() {
    return this.store.select(reducerMap => reducerMap.userReducer.info.uid);
  }

  saveUserInfo(user: UserModel) {
    this.store.dispatch(new SaveUserInfoAction(user));
  }
}
