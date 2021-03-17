import {NgModule, ModuleWithProviders, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CounterService} from './shared/services/counter.service';
import {SampleService} from './shared/services/sample.service';
import {CounterComponent} from './components/counter/counter.component';
import {CounterDataResourceService} from './shared/resources/counter-data-resource.service';


const EXPORTED_DECLARATIONS: Array<Type<any> | any[]> = [
  CounterComponent
];
const INTERNAL_DECLARATIONS: Array<Type<any> | any[]> = [
  ...EXPORTED_DECLARATIONS
];
const EXPORTS: Array<Type<any> | any[]> = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: INTERNAL_DECLARATIONS,
  exports: EXPORTS
})
export class CoreModule {
  static forRoot(config?: {}): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [SampleService]
    };
  }
}
