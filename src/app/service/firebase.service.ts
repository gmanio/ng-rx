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
        const oUser = new UserModel();
        oUser.email = user.email;
        oUser.uid = user.uid;

        this.updateUserInfo(oUser);
      },
      (err) => this.errorHandler(err)
    );

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

  public updateUserInfo(user: UserModel) {
    if ( this.isLogin() ) {
      firebase.database()
        .ref('/UserInfo/' + this.uid)
        .update(user);
    }
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
        })
      }

      BodyInfoRef.on('value', (snapshot) => {
        const arrData = [];
        snapshot.forEach((item) => {
          arrData.push(item.val());
          return false;
        });

        saveBodyInfo$.emit(arrData);
      })
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
        })
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
