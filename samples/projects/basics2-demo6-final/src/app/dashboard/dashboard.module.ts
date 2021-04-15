import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

const EXPORTED_DECLARATIONS: Array<Type<any> | any[]> = [
  DashboardComponent
];
const INTERNAL_DECLARATIONS: Array<Type<any> | any[]> = [
  ...EXPORTED_DECLARATIONS,
];
const EXPORTS: Array<Type<any> | any[]> = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule
  ],
  declarations: INTERNAL_DECLARATIONS,
  exports: EXPORTS
})
export class DashboardModule {

}
