import { Component, ElementRef } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../model/user.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getUserInfoSelector } from '../../../reducer/user.reducer';
import { AppStore } from '../../../reducer/index';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  public user: Observable<UserModel>;
  // public user$: Observable<UserModel>;

  constructor(private firebaseService: FirebaseService,
              private store: Store<AppStore>,
              private router: Router) {
    this.user = this.store.select(getUserInfoSelector);

    // this.store.select(getUserInfoSelector).subscribe((user) => {
    //   this.cd.detectChanges();
    //   return user;
    // });

    // store.select(fromRoot.getUserInfo)
    //   .subscribe((currentUserInfo: UserModel) => {
    //     this.user = currentUserInfo;
    //   });
  }

  public onClickUpdateUserInfo() {
    // this.user.gender = this.el.nativeElement.querySelector('.genderRadio:checked').value;
    //
    // this.firebaseService
    //   .saveUserInfo(this.user)
    //   .subscribe((resUpdatedUser: UserModel) => {
    //     const updatedUser: UserModel = resUpdatedUser;
    //     const oSaveUserInfoAction = new userAction.SaveUserInfoAction(updatedUser);
    //     // dispatch store for UI
    //     this.store.dispatch(oSaveUserInfoAction);
    //   });
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
