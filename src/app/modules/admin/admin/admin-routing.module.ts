import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrganiztionComponent } from 'src/app/components/add-organiztion/add-organiztion.component';
import { AdminDashBoardComponent } from 'src/app/components/admin-dash-board/admin-dash-board.component';
import { AdminLoginComponent } from 'src/app/components/admin-login/admin-login.component';


const routes: Routes = [

  {path:"login",pathMatch:"full",component:AdminLoginComponent},
  {path:"organizations/post",pathMatch:"full",component:AddOrganiztionComponent},
  {path:"dashboard",pathMatch:"full",component:AdminDashBoardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
