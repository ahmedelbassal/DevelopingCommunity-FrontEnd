import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinCommunityComponent } from 'src/app/components/join-community/join-community.component';
import { DeactiveUserButtonComponent } from 'src/app/components/RegistrationAndLogin/deactive-user-button/deactive-user-button.component';
import { UserEditComponent } from 'src/app/components/user-edit/user-edit.component';
import { UserRegisterComponent } from 'src/app/components/user-register/user-register.component';
import { UserLoginComponent } from 'src/app/components/UserLogin/user-login/user-login.component';

const routes: Routes = [

  {path:"register",pathMatch:"full",component:JoinCommunityComponent},
  {path:"login",pathMatch:"full",component:UserLoginComponent},
  {path:"edit",pathMatch:"full",component:UserEditComponent},
  {path:"deactivate",pathMatch:"full",component:DeactiveUserButtonComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
