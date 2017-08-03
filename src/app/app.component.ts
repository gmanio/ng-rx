import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducer';
import * as userAction from './action/user.action';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './service/firebase.service';
import { UserModel } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Inbody';
  public userInfo$: Observable<any>;

  constructor(private store: Store<fromRoot.State>,
              private firebaseService: FirebaseService) {
    this.userInfo$ = store.select(fromRoot.getUserInfo);

    Observable.timer(1500).subscribe(this.firebaseTest.bind(this));
  }

  public firebaseTest() {
    this.firebaseService
      .loadUserInfo()
      .subscribe(
        (data) => {
          console.log(data);
        });

    const oUser = new UserModel();
    oUser.email = 'user01@sk.com';
    oUser.age = 27;
    oUser.gender = 'MALE';
    oUser.height = 178;

    this.firebaseService.saveUserInfo(oUser);
  }

  reduxTest() {
    this.store.dispatch(new userAction.SaveUserInfoAction({
      email: 'test@test.com',
      age: 20,
      height: 160,
      gender: 'female'
    }));
  }
}
