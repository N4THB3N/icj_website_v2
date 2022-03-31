import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { YouthGroupComponent } from './components/youth-group/youth-group.component';

const routes: Routes = [
    {path:'mainpage', component: MainPageComponent},
    {path:'', redirectTo:'mainpage', pathMatch:'full'}, 
    {path:'youthgroup', component: YouthGroupComponent},   
    {path:'resources', component: ResourcesComponent}
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }