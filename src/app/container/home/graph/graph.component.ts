import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { getUserInfoSelector } from '../../../reducer/user.reducer';
import { UserModel } from '../../../model/user.model';
import { getBodyInfoListWeek, getBodyInfoListWeekSelector } from '../../../reducer/body.reducer';
import { BodyModel } from '../../../model/body.model';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public weekData$: Observable<BodyModel[]>;
  public option: any;

  constructor(private store: Store<BodyModel[]>) {
    this.weekData$ = this.store.select(getBodyInfoListWeekSelector);
    // this.store.select(getUserInfoSelector)
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

  ngOnInit() {
  }
}
