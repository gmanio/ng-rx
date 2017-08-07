import { AfterViewInit, Component } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStore } from '../../reducer';
import * as userAction from '../../action/user.action';
import * as bodyAction from '../../action/body.action';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private firebaseService: FirebaseService,
              private store: Store<AppStore>,
              private router: Router) {
  }

  ngAfterViewInit(): void {
    this.store.dispatch(new userAction.LoadUserInfoAction(''));
    this.store.dispatch(new bodyAction.LoadBodyInfoAction(''));
  }
}
