import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './submission/list/list.component';
import { MapComponent } from './submission/map/map.component';
import { SubmissionComponent } from './submission/submission/submission.component';

const routes: Routes = [
  { path: '', component: SubmissionComponent, pathMatch: 'full' },
  {
    path: 'submission', component: SubmissionComponent,
    children: [
      { path: '', component: ListComponent, pathMatch: 'full' },
      { path: 'list', component: ListComponent },
      { path: 'map', component: MapComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
