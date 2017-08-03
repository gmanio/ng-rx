import { EventEmitter, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private firebaseService: FirebaseService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const authEmitter$ = new EventEmitter();

    this.firebaseService
      .getAuth()
      .onAuthStateChanged(authEmitter$);

    return authEmitter$
      .take(1)
      .map(authState => !!authState)
      .do(authenticated => {
        if ( !authenticated ) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      });
  }
}
