import { Component, ElementRef } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../model/user.model';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../reducer';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../service/user.service';
import * as userAction from '../../../action/user.action';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  public user$: Observable<UserModel>;


  constructor(private firebaseService: FirebaseService,
              private store: Store<AppStore>,
              private router: Router,
              private el: ElementRef,
              private userSerivce: UserService) {
    this.user$ = this.userSerivce.getUserInfo();
  }

  public onClickUpdateUserInfo() {
    // const gender = this.el.nativeElement.querySelector('.genderRadio:checked').value;
    // this.store.dispatch(new userAction.SaveUserInfoAction(userModel));
  }

  public onClickRemoveAllBodyInfo() {
    this.firebaseService.clearBodyInfo();
  }

  public onClickSignOut() {
    this.firebaseService
      .signOut()
      .subscribe(() => {
        this.router.navigate(['login']);
      });
  }
}
