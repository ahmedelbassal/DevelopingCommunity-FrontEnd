import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';
import { UserRegisterComponent } from 'src/app/components/user-register/user-register.component';
import { UserLoginComponent } from 'src/app/components/UserLogin/user-login/user-login.component';

const routes: Routes = [

  {path:"register",pathMatch:"full",component:UserRegisterComponent},
  {path:"login",pathMatch:"full",component:UserLoginComponent},
  {path:"edit",pathMatch:"full",component:UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
