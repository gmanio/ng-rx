import { Component } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public id = '';
  public password = '';

  constructor(private firebaseService: FirebaseService,
              private router: Router) {
  }

  public login() {
    const convertSKId: string = this.id.concat('@sk.com');

    this.firebaseService
      .signIn(convertSKId, this.password)
      .subscribe(() => {
        this.router.navigate(['home/input']);
      });
  }
}
