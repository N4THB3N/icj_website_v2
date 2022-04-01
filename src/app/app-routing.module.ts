import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
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
    {path: 'sermons', component: SermonsComponent}
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }