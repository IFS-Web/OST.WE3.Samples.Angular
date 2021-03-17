import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: '', // /dashboard/
    component: DashboardComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
