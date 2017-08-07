import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getBodyInfoListWeekSelector } from '../../../reducer/body.reducer';
import { BodyModel } from '../../../model/body.model';
import { AppStore } from '../../../reducer/index';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public weekData$: Observable<BodyModel[]>;
  public option: any;

  constructor(private store: Store<AppStore>) {
    this.weekData$ = this.store.select(getBodyInfoListWeekSelector);
  }

  ngOnInit() {
  }
}
