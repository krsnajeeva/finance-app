import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingLayoutComponent } from '../landing/components/landing/landing-layout.component';
import { AccountSettingComponent } from 'src/app/shared/components/account-setting/account-setting.component';
import { AppDashboardComponent } from 'src/app/shared/components/dashboard/dashboard.component';
import { AppHomeComponent } from '../../shared/components/home/home.component';
const routes: Routes = [
    {
        path: '', component: AppLandingLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'account', component: AccountSettingComponent },
            { path: 'dashboard', component: AppDashboardComponent },
            { path: 'home', component: AppHomeComponent }
        ]
    }
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppLandingRoutingModule { }
