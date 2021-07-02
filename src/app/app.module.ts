import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/RegistrationAndLogin/form/form.component';
import { FormInputNumberComponent } from './components/RegistrationAndLogin/form-input-number/form-input-number.component';
import { FormInputStringComponent } from './components/RegistrationAndLogin/form-input-string/form-input-string.component';
import { EmailInputComponent } from './components/RegistrationAndLogin/email-input/email-input.component';
import { PhoneInputComponent } from './components/RegistrationAndLogin/phone-input/phone-input.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { NavbarComponent } from './components/Navbar/navbar/navbar.component';
import { HomeComponent } from './components/Home/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/userRouting/user/user.module').then(
        (m) => m.UserModule
      ),
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    HomeComponent,
    ErrorComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
