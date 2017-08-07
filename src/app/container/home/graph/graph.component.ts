import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BodyModel } from '../../../model/body.model';
import { BodyService } from '../../../service/body.service';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public weekData$: Observable<BodyModel[]>;
  public selectedWeek$: Observable<number>;
  public option: any;

  constructor(private bodyService: BodyService) {
    this.selectedWeek$ = this.bodyService.getSelectedWeek();
    this.weekData$ = this.bodyService.getBodyInfoSelectedWeek();
  }

  ngOnInit() {
  }
}
