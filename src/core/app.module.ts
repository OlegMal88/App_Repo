import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RootStoreModule} from '@state/store.module';
import {ROUTES} from './app.routing';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataService} from '@api/mockServer/data.service';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    InMemoryWebApiModule.forRoot(DataService),
    EffectsModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
class AppModule {
}

export {
  AppModule
};
