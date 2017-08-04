import { Component, OnInit } from '@angular/core';
import { BodyModel } from '../../../model/body.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducer';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
  public bodyInfos: Array<BodyModel> = [];
  public bodyInfos$: Observable<BodyModel[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.bodyInfos$ = this.store.select(fromRoot.getBodyInfoList);
    this.store.select(fromRoot.getBodyInfoList)
      .subscribe((data) => {
        this.bodyInfos = data;
      })
    
  }

  ngOnInit() {
  }

}
