import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BodyModel } from '../../../model/body.model';
import { BodyService } from '../../../service/body.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  public bodyInfos$: Observable<BodyModel[]>;

  constructor(private bodyService: BodyService) {
    this.bodyInfos$ = this.bodyService.getBodyInfoList();
  }
}
