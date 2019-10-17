import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RootStoreModule} from '@state/store.module';
import {routes} from './app.routing';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from '@api/http/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    RouterModule.forRoot(routes, {useHash: true}),
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
class AppModule {
}

export {
  AppModule
};
