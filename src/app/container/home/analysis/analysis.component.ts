import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';
import { BodyModel } from '../../../model/body.model';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  public bodyInfos: Array<BodyModel> = [];

  constructor(private firebase: FirebaseService) {
  }

  ngOnInit() {
    this.firebase
      .loadBodyInfo()
      .subscribe((datas) => {
          for ( let bodyModel of datas ) {
            this.bodyInfos.push(bodyModel);
          }

          // bodyInfo array
          console.log(this.bodyInfos);
        }
      )
  }

}
