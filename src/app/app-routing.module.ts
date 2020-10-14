import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardPageComponent} from './card-page/card-page.component'
import {AboutPageComponent} from './about-page/about-page.component'


const routes: Routes = [
  {
    path:'my-links',
    component:CardPageComponent
  },
  {
    path:'about',
    component:AboutPageComponent
  },
  { path: '',   redirectTo: 'my-links', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
