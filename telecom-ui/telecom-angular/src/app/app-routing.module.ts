import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {
    path: 'log-in', component: LogInComponent
  },
  {
    path: 'in-put', component: InputFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
