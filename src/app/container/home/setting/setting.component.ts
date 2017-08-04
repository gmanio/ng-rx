import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../model/user.model';
import * as fromRoot from '../../../reducer';
import * as userAction from '../../../action/user.action';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  @Input()
  public user: UserModel;
  public user$: Observable<UserModel>;

  constructor(private firebaseService: FirebaseService,
              private store: Store<fromRoot.State>,
              private router: Router) {
    //this.user$ = store.select(fromRoot.getUserInfo);
    store.select(fromRoot.getUserInfo)
      .subscribe((data) => {
        this.user = data;
      })
  }

  ngOnInit(): void {
    // this.firebaseService
    //   .loadUserInfo()
    //   .subscribe((data) => {
    //     this.user = data;
    //   })
  }

  public onClickRemoveBodyInfo() {
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
