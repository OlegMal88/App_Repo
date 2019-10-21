import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataService} from '@api/mockServer/data.service';
import {ApiModule} from '@api/api.module';
import {RootStoreModule} from '@state/store.module';
import {ROUTES} from './app.routing';
import {AppComponent} from './app.component';

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
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
class AppModule {
}

export {
  AppModule
};
