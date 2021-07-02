import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';



import {RouterModule,Routes} from "@angular/router"
import {FormsModule,ReactiveFormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/RegistrationAndLogin/form/form.component';
import { FormInputNumberComponent } from './components/RegistrationAndLogin/form-input-number/form-input-number.component';
import { FormInputStringComponent } from './components/RegistrationAndLogin/form-input-string/form-input-string.component';
import { EmailInputComponent } from './components/RegistrationAndLogin/email-input/email-input.component';
import { PhoneInputComponent } from './components/RegistrationAndLogin/phone-input/phone-input.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { DeactiveUserButtonComponent } from './components/RegistrationAndLogin/deactive-user-button/deactive-user-button.component';


const appRoutes:Routes=[
 {path:"user",loadChildren:()=>import('./modules/userRouting/user/user.module').then(m => m.UserModule)}
]


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
