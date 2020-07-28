import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingLayoutComponent } from '../landing/components/landing/landing-layout.component';
import { AccountSettingComponent } from 'src/app/shared/components/account-setting/account-setting.component';
import { AppDashboardComponent } from 'src/app/shared/components/dashboard/dashboard.component';
import { AppHomeComponent } from '../../shared/components/home/home.component';
import { AddAdminComponent } from 'src/app/shared/components/admin/add-admin/add-admin.component';
import { ViewAdminComponent } from 'src/app/shared/components/admin/view-admin/view-admin.component';
import { AddEmployeeComponent } from 'src/app/shared/components/employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from 'src/app/shared/components/employee/view-employee/view-employee.component';

const routes: Routes = [
    {
        path: '', component: AppLandingLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'account', component: AccountSettingComponent },
            { path: 'dashboard', component: AppDashboardComponent },
            { path: 'home', component: AppHomeComponent },
            { path: 'add-admin', component: AddAdminComponent },
            { path: 'view-admin', component: ViewAdminComponent },
            { path: 'add-employee', component: AddEmployeeComponent },
            { path: 'view-employee', component: ViewEmployeeComponent },
        ]
    }
];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppLandingRoutingModule { }
