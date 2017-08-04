import { EventEmitter, Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { BodyModel } from '../model/body.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducer';
import * as userAction from '../action/user.action';

const firebaseInfo = {
  apiKey: 'AIzaSyBS-TvYbLlnsyyqhpIKFMWPcWPXfTvX50U',
  authDomain: 'inbody-c8369.firebaseapp.com',
  databaseURL: 'https://inbody-c8369.firebaseio.com',
  projectId: 'inbody-c8369',
  storageBucket: 'inbody-c8369.appspot.com',
  messagingSenderId: '382627426015'
}

@Injectable()
export class FirebaseService {
  private uid = '';

  constructor(private store: Store<fromRoot.State>) {
    firebase.initializeApp(firebaseInfo);
  }

  public getAuth() {
    return firebase.auth();
  }

  public getCurrentUser(): Object {
    return firebase.auth().currentUser;
  }

  public isLogin(): boolean {
    if ( !!this.getCurrentUser() ) {
      return true;
    }

    return false;
  }

  public signIn(email, password): Observable<any> {
    const loginPromise = firebase.auth().signInWithEmailAndPassword(email, password);
    const signIn$ = Observable.fromPromise(loginPromise).share();

    signIn$.subscribe(
      (user) => {
        this.uid = user.uid;
        const oUser = new UserModel(user);
        this.store.dispatch(new userAction.InitUserInfoAction(oUser));
      },
      (err) => this.errorHandler(err)
    );

    return signIn$;
  }

  public signOut(): Observable<any> {
    const logoutPromise = firebase.auth().signOut();
    const signOut$ = Observable.fromPromise(logoutPromise).share();

    return signOut$;
  }

  public saveUserInfo(user: UserModel) {
    const saveUserInfo$ = new EventEmitter();
    const userInfoDBRef = firebase.database().ref('/UserInfo/' + this.uid);

    if ( this.isLogin() ) {

      userInfoDBRef.set(user);

      userInfoDBRef.once('value', (snapshot) => {
        saveUserInfo$.emit(snapshot.val());
      });
    }

    return saveUserInfo$;
  }

  public loadUserInfo(): EventEmitter<any> {
    const onLoadUserInfo$ = new EventEmitter();

    if ( this.isLogin() ) {
      this.uid = this.getCurrentUser()['uid'];

      firebase.database()
        .ref('/UserInfo/' + this.uid)
        .once('value', (snapshot) => {
            // broadcast onMessage
            onLoadUserInfo$.emit(snapshot.val());
          }
        );
    }

    return onLoadUserInfo$;
  }

  public saveBodyInfo(bodies: BodyModel | Array<BodyModel>) {
    const saveBodyInfo$ = new EventEmitter();

    const BodyInfoRef = firebase.database().ref('/BodyInfo/' + this.uid);

    if ( this.isLogin() ) {
      if ( bodies instanceof BodyModel ) {
        BodyInfoRef.push().set(bodies);
      }

      if ( bodies instanceof Array ) {
        bodies.forEach((bodyInfo) => {
          BodyInfoRef.push().set(bodyInfo);
        });
      }

      BodyInfoRef.on('value', (snapshot) => {
        const arrData = [];
        snapshot.forEach((item) => {
          arrData.push(item.val());
          return false;
        });

        saveBodyInfo$.emit(arrData);
      });
    }

    return saveBodyInfo$;
  }

  public loadBodyInfo(): EventEmitter<any> {
    const loadBodyInfo$ = new EventEmitter();

    if ( this.isLogin() ) {
      this.uid = this.getCurrentUser()['uid'];
      firebase.database()
        .ref('/BodyInfo/' + this.uid)
        .once('value')
        .then((snapshot) => {
          const arrData = [];

          snapshot.forEach((item) => {
            arrData.push(item.val());
            return false;
          });

          // broadcast onMessage
          loadBodyInfo$.emit(arrData);
        });
    }

    return loadBodyInfo$;
  }

  public clearBodyInfo() {
    const clearBodyInfo$ = new EventEmitter();

    if ( this.isLogin() ) {
      this.uid = this.getCurrentUser()['uid'];
      firebase.database()
        .ref('/BodyInfo/' + this.uid)
        .remove()
        .then(() => {
          console.log('remove success');
          clearBodyInfo$.emit();
        });
    }

    return clearBodyInfo$;
  }

  public clearUserInfo() {
    const clearUserInfo$ = new EventEmitter();

    if ( this.isLogin() ) {
      this.uid = this.getCurrentUser()['uid'];
      firebase.database()
        .ref('/UserInfo/' + this.uid)
        .remove()
        .then(() => {
          console.log('remove success');
          clearUserInfo$.emit();
        });
    }

    return clearUserInfo$;
  }

  public errorHandler(err) {
    console.error(`[ERROR : FIREBASE] ${err}`);
  }
}
