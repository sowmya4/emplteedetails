import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: 'employees',loadChildren:'./home/home.module#HomeModule'},CanActivate:[AuthGuardService],
  {path: 'index',loadChildren:'./index/index.module#IndexModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuardService]
})
export class AppRoutingModule { 

}
