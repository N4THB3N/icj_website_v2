import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppBarComponent } from './components/AppBar/app-bar/app-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { YouthGroupComponent } from './components/youth-group/youth-group.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    MainPageComponent,
    YouthGroupComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
