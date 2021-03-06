import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from 'src/app/components/UserLogin/user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputStringComponent } from 'src/app/components/RegistrationAndLogin/form-input-string/form-input-string.component';
import { FormInputNumberComponent } from 'src/app/components/RegistrationAndLogin/form-input-number/form-input-number.component';
import { EmailInputComponent } from 'src/app/components/RegistrationAndLogin/email-input/email-input.component';
import { PhoneInputComponent } from 'src/app/components/RegistrationAndLogin/phone-input/phone-input.component';
import { UserService } from 'src/app/services/user.service';
import { UserRegisterComponent } from 'src/app/components/user-register/user-register.component';
import { DepartmentService } from 'src/app/services/department.service';
import { InputSelectComponent } from 'src/app/components/RegistrationAndLogin/input-select/input-select.component';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';
import { DeactiveUserButtonComponent } from 'src/app/components/RegistrationAndLogin/deactive-user-button/deactive-user-button.component';
import { JoinCommunityComponent } from 'src/app/components/join-community/join-community.component';
import { UserDetailsComponent } from 'src/app/components/user-details/user-details.component';
import { EditPasswordComponent } from 'src/app/components/edit-password/edit-password.component';
import { InputPasswordComponent } from 'src/app/components/input-password/input-password.component';
import { CommonsAmongAllUsersService } from 'src/app/services/commons-among-all-users.service';


@NgModule({
  declarations: [
    UserLoginComponent,
    FormInputStringComponent,
    FormInputNumberComponent,
    EmailInputComponent,
    PhoneInputComponent,
    UserRegisterComponent,
    InputSelectComponent,
    UserEditComponent,
    DeactiveUserButtonComponent,
    JoinCommunityComponent,
    UserDetailsComponent,
    EditPasswordComponent,
    InputPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[UserService,DepartmentService,CommonsAmongAllUsersService]
})
export class UserModule { }
