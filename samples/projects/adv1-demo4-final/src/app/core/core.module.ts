import {NgModule, ModuleWithProviders, Type} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SampleService} from './shared/services/sample.service';


const EXPORTED_DECLARATIONS: Array<Type<any> | any[]> = [];
const INTERNAL_DECLARATIONS: Array<Type<any> | any[]> = [
  ...EXPORTED_DECLARATIONS
];
const EXPORTS: Array<Type<any> | any[]> = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  imports: [
    CommonModule
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
