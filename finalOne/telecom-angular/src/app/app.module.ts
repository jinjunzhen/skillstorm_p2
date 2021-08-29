import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { NavoutComponent } from './navout/navout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { PlanDetailComponent } from './plan-detail/plan-detail.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    RegisterComponent,
    NavComponent,
    NavoutComponent,
    HomeComponent,
    AccountDetailComponent,
    PlanDetailComponent,
    AddPlanComponent,
    AddPhoneComponent,
    PhoneDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
