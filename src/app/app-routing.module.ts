import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { RegisterclaimComponent } from './registerclaim/registerclaim.component';
import { ClaimstatusComponent } from './claimstatus/claimstatus.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminApprovalComponent } from './admin/admin-approval/admin-approval.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'claim', component: ClaimComponent },
  { path: 'register', component: RegisterclaimComponent },
  { path: 'status', component: ClaimstatusComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'adminApproval', component: AdminApprovalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
