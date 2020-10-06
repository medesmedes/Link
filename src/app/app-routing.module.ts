import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardContainerComponent} from './card-container/card-container.component'
import {AboutContainerComponent} from './about-container/about-container.component'


const routes: Routes = [
  {
    path:'home',
    component:CardContainerComponent
  },
  {
    path:'about',
    component:AboutContainerComponent
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
