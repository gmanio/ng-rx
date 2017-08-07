import { Component, ElementRef } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../model/user.model';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  public user$: Observable<UserModel>;

  constructor(private firebaseService: FirebaseService,
              private router: Router,
              private el: ElementRef,
              private userSerivce: UserService) {
    this.user$ = this.userSerivce.getUserInfo();
  }

  public onClickUpdateUserInfo(updateUser) {
    debugger;
    this.userSerivce.saveUserInfo(updateUser);
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
