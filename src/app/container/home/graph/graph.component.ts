import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducer';
import { BodyModel } from '../../../model/body.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public weekData$: Observable<BodyModel[]>;
  public option: any;

  constructor(private store: Store<fromRoot.State>) {
    this.weekData$ = this.store.select(fromRoot.getBodyInfoListWeek);
    // this.store.select(fromRoot.getBodyInfoListMonth)
    //   .subscribe((data) => {
    //     console.log(data);
    //   })
  }

  ngOnInit() {}
}
