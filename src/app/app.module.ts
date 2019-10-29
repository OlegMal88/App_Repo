import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from 'src/app/services/mockServer/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService), // Mock Server, remove after start of actual development
  ],
  providers: [],
  bootstrap: [AppComponent]
})
class AppModule {
}

export {
  AppModule
};
