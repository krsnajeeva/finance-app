import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from 'src/login/login.component';
import { AppLandingModule } from 'src/landing/landing.module';
import { AppLoginModule } from 'src/login/login.module';

const loadAppLoginModule = () => AppLoginModule;
const loadAppLandingModule = () => AppLandingModule;

const routes: Routes = [
  { path: '', loadChildren: loadAppLoginModule },
  { path: 'landing', loadChildren: loadAppLandingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
