import { Component } from '@angular/core';
import { BodyModel } from '../../../model/body.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getBodyInfoList } from '../../../reducer/body.reducer';
import { AppStore } from '../../../reducer/index';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  public bodyInfos$: Observable<BodyModel[]>;

  constructor(private store: Store<AppStore>) {
    this.bodyInfos$ = this.store.select(getBodyInfoList);
  }
}
