import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from 'src/app/components/admin-login/admin-login.component';


const routes: Routes = [

  {path:"login",pathMatch:"full",component:AdminLoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
