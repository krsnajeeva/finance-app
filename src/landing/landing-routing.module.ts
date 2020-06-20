import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingLayoutComponent } from './landing-layout.component';
const routes: Routes = [
    { path: '', component: AppLandingLayoutComponent }
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppLandingRoutingModule { }
