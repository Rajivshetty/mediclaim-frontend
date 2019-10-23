import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { RegisterclaimComponent } from './registerclaim/registerclaim.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminApprovalComponent } from './admin/admin-approval/admin-approval.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'register', component: RegisterclaimComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'adminApproval', component: AdminApprovalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
