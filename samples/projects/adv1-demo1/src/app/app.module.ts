import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {WelcomeModule} from "./welcome/welcome.module";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    WelcomeModule.forRoot(),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
