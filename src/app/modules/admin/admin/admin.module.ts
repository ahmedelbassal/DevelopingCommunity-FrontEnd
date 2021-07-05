import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from 'src/app/components/admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputStringAdminCompComponent } from 'src/app/components/form-input-string-admin-comp/form-input-string-admin-comp.component';
import { AddOrganiztionComponent } from 'src/app/components/add-organiztion/add-organiztion.component';
import { FormInputStringComponent } from 'src/app/components/RegistrationAndLogin/form-input-string/form-input-string.component';
import { AdminDashBoardComponent } from 'src/app/components/admin-dash-board/admin-dash-board.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    FormInputStringAdminCompComponent,
    AddOrganiztionComponent,
    AdminDashBoardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class AdminModule { }
