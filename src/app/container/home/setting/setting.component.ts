import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../model/user.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  @Input()
  public user: UserModel;

  constructor(private firebaseService: FirebaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.firebaseService
      .loadUserInfo()
      .subscribe((data) => {
        this.user = data;
      })
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
