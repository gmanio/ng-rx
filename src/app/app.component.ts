import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducer';
import * as userAction from './action/user.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Inbody';
  public userInfo$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    this.userInfo$ = store.select(fromRoot.getUserInfo);
  }

  reduxTest() {
    this.store.dispatch(new userAction.SaveUserInfoAction({
      email: 'test@test.com',
      uid: 'asd',
      age: 20,
      height: 160,
      gender: 'female'
    }));
  }
}
