import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRouter } from './home.routes';
import { AuthGuard } from '../../service/guard/auth.guard';
import { InputComponent } from './input/input.component';
import { GraphComponent } from './graph/graph.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home.component';
import { LineGraphComponent } from '../../component/graph/line-graph/line-graph.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRouter
  ],
  declarations: [
    InputComponent,
    GraphComponent,
    AnalysisComponent,
    SettingComponent,
    HomeComponent,
    LineGraphComponent
  ],
  providers: [
    AuthGuard
  ]
})

export class HomeModule {
}
