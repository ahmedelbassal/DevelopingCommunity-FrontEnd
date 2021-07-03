import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from 'src/app/components/admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputStringAdminCompComponent } from 'src/app/components/form-input-string-admin-comp/form-input-string-admin-comp.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    FormInputStringAdminCompComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
