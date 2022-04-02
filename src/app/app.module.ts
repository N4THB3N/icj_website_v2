import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppBarComponent } from './components/AppBar/app-bar/app-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { YouthGroupComponent } from './components/youth-group/youth-group.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { SermonsComponent } from './components/sermons/sermons.component';
import { LiveComponent } from './components/live/live.component';
import { IbjComponent } from './components/ibj/ibj.component';
import { IcjkidsComponent } from './components/icjkids/icjkids.component';
import { DiscipleshipComponent } from './components/discipleship/discipleship.component';
import { EvangelismComponent } from './components/evangelism/evangelism.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    MainPageComponent,
    YouthGroupComponent,
    FooterComponent,
    ResourcesComponent,
    ActivitiesComponent,
    SermonsComponent,
    LiveComponent,
    IbjComponent,
    IcjkidsComponent,
    DiscipleshipComponent,
    EvangelismComponent,
    ContactComponent,
  ],
  imports: [  
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
