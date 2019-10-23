import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { ClaimComponent } from './claim/claim.component';
import { RegisterclaimComponent } from './registerclaim/registerclaim.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminApprovalComponent } from './admin/admin-approval/admin-approval.component';
import { AlertsComponent } from './common/alerts/alerts.component';
import { HomeComponent } from './home/home.component';

import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClaimComponent,
    RegisterclaimComponent,
    AdminLoginComponent,
    AdminApprovalComponent,
    AlertsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
