import { NgModule } from '@angular/core';
import { AppLoginComponent } from '../login/components/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoginRoutingModule } from './login-routing.module';
import { RegistrationComponent } from '../login/components/registration/registration.component';

@NgModule({
  declarations: [
    AppLoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppLoginRoutingModule
  ],
  exports: [
    AppLoginComponent,
    RegistrationComponent
  ]
})

export class AppLoginModule { }
