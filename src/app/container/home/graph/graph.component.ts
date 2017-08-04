import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducer';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {
    this.store.select(fromRoot.getBodyInfoListWeek)
      .subscribe((data) => {
        console.log(data);
      })
    this.store.select(fromRoot.getBodyInfoListMonth)
      .subscribe((data) => {
        console.log(data);
      })
  }

  ngOnInit() {}
}
