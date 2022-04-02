import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiscipleshipComponent } from './components/discipleship/discipleship.component';
import { EvangelismComponent } from './components/evangelism/evangelism.component';
import { IbjComponent } from './components/ibj/ibj.component';
import { IcjkidsComponent } from './components/icjkids/icjkids.component';
import { LiveComponent } from './components/live/live.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SermonsComponent } from './components/sermons/sermons.component';
import { YouthGroupComponent } from './components/youth-group/youth-group.component';

const routes: Routes = [
    {path:'mainpage', component: MainPageComponent},
    {path:'', redirectTo:'mainpage', pathMatch:'full'}, 
    {path:'youthgroup', component: YouthGroupComponent},   
    {path:'resources', component: ResourcesComponent},
    {path: 'activities', component: ActivitiesComponent},
    {path: 'sermons', component: SermonsComponent},
    {path: 'live', component: LiveComponent},
    {path: 'evangelism', component: EvangelismComponent},
    {path: 'discipleship', component: DiscipleshipComponent},
    {path: 'icjkids', component: IcjkidsComponent},
    {path: 'ibj', component: IbjComponent},
    {path: 'contact', component: ContactComponent}
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }