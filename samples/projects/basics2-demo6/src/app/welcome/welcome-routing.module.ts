import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WelcomeComponent} from './welcome.component';
import {CounterComponent} from './components/counter/counter.component';
import {CounterResultComponent} from './components/counter/counter-result.component';

const welcomeRoutes: Routes = [
  {
    path: 'welcome',
    // TODO
    children: [
      // TODO
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(welcomeRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class WelcomeRoutingModule {
}
