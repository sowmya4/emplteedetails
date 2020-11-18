import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmplyeeListComponent } from './emplyeelist/emplyee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


const routes: Routes = [
    {path: '',component: EmplyeeListComponent},
    {path: 'create',component: CreateEmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

 }

