import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { CarouselComponent } from './components/Home/carousel/carousel.component';
import { EditPasswordComponent } from './components/edit-password/edit-password.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ViewProjectsComponent } from './components/view-projects/view-projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { SafePipe } from './components/safe.pipe';


const appRoutes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/userRouting/user/user.module').then(
        (m) => m.UserModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  {path:"projects",pathMatch:"full",component:ViewProjectsComponent},
  {path:"projects/add",pathMatch:"full",component:AddProjectComponent},
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
    CarouselComponent,
    ViewProjectsComponent,
    AddProjectComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
