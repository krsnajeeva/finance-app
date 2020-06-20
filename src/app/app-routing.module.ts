import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from 'src/login/login.component';
import { AppLandingModule } from 'src/landing/landing.module';

const loadAppLogingModule = () => AppLandingModule;

const routes: Routes = [
  { path: '', component: AppLoginComponent },
  { path: 'landing', loadChildren: loadAppLogingModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
