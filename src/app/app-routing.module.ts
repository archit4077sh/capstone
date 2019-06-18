import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: ':id', component: RestaurantComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
