import { Component } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private firebaseService: FirebaseService,
              private router: Router) {
  }

  public onClickSignOut(): void {
    this.firebaseService
      .signOut()
      .subscribe(() => {
        this.router.navigate(['login']);
      });
  }
}
