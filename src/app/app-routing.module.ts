import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { AdviceIDComponent } from './home/advice-id/advice-id.component';
import { HomeComponent } from './home/home.component';
import { QoutesComponent } from './home/qoutes/qoutes.component';

const routes: Routes = [
  // {path:'about',component:AboutComponent},
  // {path:'advice-id',component:AdviceIDComponent},
  // {path:'qoutes',component:QoutesComponent},
  // {path:'home',component:HomeComponent},
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  // {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
