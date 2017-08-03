import { AfterViewInit, Component } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  constructor(private firebaseService: FirebaseService,
              private router: Router) {
  }

  ngAfterViewInit(): void {
    Observable.timer(1000)
      .subscribe(() => {
        this.firebaseService
          .loadUserInfo()
          .subscribe((data) => {
            console.log('Success Load :: [ UserModel ]');
            console.log(data);
          });

        this.firebaseService
          .loadBodyInfo()
          .subscribe((data) => {
            console.log('Success Load :: [ BodyModel ]');
            console.log(data);
          });
      });
  }

  public onClickSignOut(): void {
    this.firebaseService
      .signOut()
      .subscribe(() => {
        this.router.navigate(['login']);
      });
  }
}
