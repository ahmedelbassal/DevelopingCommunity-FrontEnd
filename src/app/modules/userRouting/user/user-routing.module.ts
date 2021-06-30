import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from 'src/app/components/UserLogin/user-login/user-login.component';

const routes: Routes = [

  {path:"login",pathMatch:"full",component:UserLoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
