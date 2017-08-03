import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../../service/guard/auth.guard';
import { InputComponent } from './input/input.component';
import { GraphComponent } from './graph/graph.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SettingComponent } from './setting/setting.component';

const homeRoutes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'input', pathMatch: 'full' },
      { path: 'input', component: InputComponent },
      { path: 'graph', component: GraphComponent },
      { path: 'analysis', component: AnalysisComponent },
      { path: 'setting', component: SettingComponent }
    ]
  }
]

export const HomeRouter = RouterModule.forChild(homeRoutes);
