import { EventEmitter, Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { BodyModel } from '../model/body.model';

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

  constructor() {
    firebase.initializeApp(firebaseInfo);

    this.signIn('user02@sk.com', 'techx1');
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

    signIn$.subscribe((user) => {
        this.uid = user.uid;
      },
      (err) => this.errorHandler(err)
    )

    return signIn$;
  }

  public signOut(): Observable<any> {
    const logoutPromise = firebase.auth().signOut();
    const signOut$ = Observable.fromPromise(logoutPromise).share();

    signOut$.subscribe(() => {
        return true;
      },
      (err) => this.errorHandler(err)
    )

    return signOut$;
  }

  public getAuth() {
    return firebase.auth();
  }

  public getCurrentUser(): Object {
    return firebase.auth().currentUser;
  }

  public saveUserInfo(user: UserModel) {
    const saveUserInfo$ = new EventEmitter();

    if ( this.isLogin() ) {
      firebase.database()
        .ref('/UserInfo/' + this.uid)
        .set(user);
    }

    return saveUserInfo$;
  }


  public loadUserInfo(): EventEmitter<any> {
    const onLoadUserInfo$ = new EventEmitter();

    if ( this.isLogin() ) {
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

    if ( this.isLogin() ) {
      firebase.database()
        .ref('/BodyInfo/' + this.uid)
        .push()
        .set(bodies);
    }

    return saveBodyInfo$;
  }

  public loadBodyInfo(): EventEmitter<any> {
    const loadBodyInfo$ = new EventEmitter();

    if ( this.isLogin() ) {
      firebase.database()
        .ref('/UserInfo/' + this.uid)
        .once('value', (snapshot) => {
            // broadcast onMessage
            loadBodyInfo$.emit(snapshot.val());
          }
        );
    }

    return loadBodyInfo$;
  }

  public clearBodyInfo() {
    const clearBodyInfo$ = new EventEmitter();

    if ( this.isLogin() ) {
      console.log(this.uid);
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
      console.log(this.uid);
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
