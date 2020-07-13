import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from '../login/components/login/login.component';
import { RegistrationComponent } from '../login/components/registration/registration.component';

const routes: Routes = [
  { path: '', component: AppLoginComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: []
})

export class AppLoginRoutingModule { }
