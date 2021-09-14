import {NgModule, ModuleWithProviders, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {CounterService} from './shared/services/counter.service';
import {CounterDataResourceService} from './shared/resources/counter-data-resource.service';

import {CounterComponent} from './components/counter/counter.component';
import {CounterResultComponent} from './components/counter/counter-result.component';

import {WelcomeComponent} from './welcome.component';
import {WelcomeRoutingModule} from './welcome-routing.module';
import {LogoPipe} from './pipes/logo.pipe';


const EXPORTED_DECLARATIONS: Array<Type<any> | any[]> = [
  WelcomeComponent
];
const INTERNAL_DECLARATIONS: Array<Type<any> | any[]> = [
  ...EXPORTED_DECLARATIONS,
  CounterComponent, CounterResultComponent
];
const EXPORTS: Array<Type<any> | any[]> = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    WelcomeRoutingModule
  ],
  declarations: INTERNAL_DECLARATIONS,
  exports: EXPORTS
})
export class WelcomeModule {
  static forRoot(config?: {}): ModuleWithProviders<WelcomeModule> {
    return {
      ngModule: WelcomeModule,
      providers: [CounterDataResourceService, CounterService]
    };
  }
}
