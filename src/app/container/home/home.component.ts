import { AfterViewInit, Component } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducer';
import * as userAction from '../../action/user.action';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private firebaseService: FirebaseService,
              private store: Store<fromRoot.State>,
              private router: Router) {
  }

  ngAfterViewInit(): void {
    this.store.dispatch(new userAction.LoadUserInfoAction(''));
    // Observable.timer(1000)
    //   .subscribe(() => {
    //     this.firebaseService
    //       .loadUserInfo()
    //       .subscribe((data) => {
    //         console.log('[HomeComponent] :: Success Load UserModel');
    //         console.log(data);
    //       });
    //
    //     this.firebaseService
    //       .loadBodyInfo()
    //       .subscribe((data) => {
    //         console.log('[HomeComponent] :: Success Load UserModel');
    //         console.log(data);
    //       });
    //   });

  }

  public onClickSignOut(): void {
    this.firebaseService
      .signOut()
      .subscribe(() => {
        this.router.navigate(['login']);
      });
  }
}
