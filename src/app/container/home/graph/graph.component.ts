import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../../service/firebase.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor(private firebase: FirebaseService) {
  }

  ngOnInit() {
    this.firebase
      .loadBodyInfo()
      .subscribe(
        (data) => {
          console.log(data);
        }
      )
  }

}
