import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { NewPhoneComponent } from './new-phone/new-phone.component';
import { AuthguardServiceService } from './authguard-service.service';
import { ReactiveFormsModule } from '@angular/forms';

import { LogInComponent } from './log-in/log-in.component';
import { AccountListComponent } from './account-list/account-list.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LogInComponent,
    PhoneListComponent,
    NewPhoneComponent,
    AccountListComponent,
    NewPhoneComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

