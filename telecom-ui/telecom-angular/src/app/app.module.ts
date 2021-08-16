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
import { RegisterationComponent } from './registeration/registeration.component';
import { LogOnComponent } from './log-on/log-on.component';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    NewPhoneComponent,
    RegisterationComponent,
    LogOnComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

