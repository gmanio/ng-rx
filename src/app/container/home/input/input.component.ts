import { Component, OnInit } from '@angular/core';
import { BodyModel } from '../../../model/body.model';
import { FirebaseService } from '../../../service/firebase.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public weight;
  public muscle;
  public fat;

  constructor(private firebaseService: FirebaseService) {
  }

  ngOnInit() {
  }

  public onClickSave() {
    const oBody = new BodyModel();

    oBody.weight = this.weight;
    oBody.muscle = this.muscle;
    oBody.fat = this.fat;

    this.firebaseService
      .saveBodyInfo(oBody)
      .subscribe(()=>{
      debugger;
      });
  }
}
