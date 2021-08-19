import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { NewPhoneComponent } from './new-phone/new-phone.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'login', component: LogInComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
