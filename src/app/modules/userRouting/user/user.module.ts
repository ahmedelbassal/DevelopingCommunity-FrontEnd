import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from 'src/app/components/UserLogin/user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputStringComponent } from 'src/app/components/RegistrationAndLogin/form-input-string/form-input-string.component';
import { FormInputNumberComponent } from 'src/app/components/RegistrationAndLogin/form-input-number/form-input-number.component';
import { EmailInputComponent } from 'src/app/components/RegistrationAndLogin/email-input/email-input.component';
import { PhoneInputComponent } from 'src/app/components/RegistrationAndLogin/phone-input/phone-input.component';
import { UserService } from 'src/app/services/user.service';


@NgModule({
  declarations: [
    UserLoginComponent,
    FormInputStringComponent,
    FormInputNumberComponent,
    EmailInputComponent,
    PhoneInputComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  providers:[UserService]
})
export class UserModule { }
