import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [IndexComponent, LoginComponent,SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
