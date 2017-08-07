import { Component } from '@angular/core';
import { BodyModel } from '../../../model/body.model';
import { FirebaseService } from '../../../service/firebase.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as bodyAction from '../../../action/body.action';
import { AppStore } from '../../../reducer/index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  public weight: number;
  public muscle: number;
  public fat: number;

  constructor(private firebaseService: FirebaseService,
              private store: Store<AppStore>,
              private router: Router) {
  }

  public onClickSave() {
    const oBody = new BodyModel({
      weight: this.weight,
      muscle: this.muscle,
      fat: this.fat,
    });
    this.store.dispatch(new bodyAction.NewBodyInfoAction(oBody));

    // this.firebaseService
    //   .saveBodyInfo(oBody)
    //   .subscribe(() => {
    //     this.router.navigate(['home/analysis'])
    //   });
  }

  public onClickSaveTempData() {
    const example = [
      {
        "date": 1501722007704,
        "weight": 75.5,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1501635602000,
        "weight": 75.3,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1501549202000,
        "weight": 75.4,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1501462802000,
        "weight": 74.8,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1501376402000,
        "weight": 74.9,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1501290002000,
        "weight": 74.5,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1501203602000,
        "weight": 74.7,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1501117645000,
        "weight": 75.0,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1501031245000,
        "weight": 75.3,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500944845000,
        "weight": 75.3,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500858445000,
        "weight": 75.6,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500772045000,
        "weight": 75.7,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500685645000,
        "weight": 76.0,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500599245000,
        "weight": 75.8,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500512845000,
        "weight": 76.3,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500426445000,
        "weight": 76.8,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500340045000,
        "weight": 76.9,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500253645000,
        "weight": 76.8,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500167245000,
        "weight": 76.5,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1500080845000,
        "weight": 76.9,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499994445000,
        "weight": 77.1,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499908045000,
        "weight": 77.0,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499821645000,
        "weight": 77.2,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499735245000,
        "weight": 77.4,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499648845000,
        "weight": 77.3,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499562445000,
        "weight": 77.5,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499476045000,
        "weight": 77.4,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499389645000,
        "weight": 77.6,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499303245000,
        "weight": 77.5,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499216845000,
        "weight": 77.6,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499130445000,
        "weight": 77.9,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1499044045000,
        "weight": 77.6,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1498957645000,
        "weight": 77.8,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1498871245000,
        "weight": 77.9,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1498784845000,
        "weight": 77.6,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1498698445000,
        "weight": 77.7,
        "fat": 14.2,
        "muscle": 35.4
      },
      {
        "date": 1498612045000,
        "weight": 77.6,
        "fat": 14.2,
        "muscle": 35.4
      }
    ];
    const bodyInfos: Array<BodyModel> = [];

    for ( let bodyInfo of example ) {
      const oBody = new BodyModel(bodyInfo);

      bodyInfos.push(oBody);
    }

    this.firebaseService
      .saveBodyInfo(bodyInfos)
      .subscribe(() => {
        this.router.navigate(['home/analysis'])
      });
  }
}
