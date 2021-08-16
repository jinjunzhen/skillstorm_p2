import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPhoneComponent } from './new-phone/new-phone.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

const routes: Routes = [
  {
    path: 'new-phone', component: NewPhoneComponent
  },
  {
    path: 'phone-list', component: PhoneListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
