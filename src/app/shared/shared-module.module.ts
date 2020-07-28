import { NgModule } from "@angular/core";
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { AppDashboardComponent } from './components/dashboard/dashboard.component';
import { AppHomeComponent } from './components/home/home.component';
import { AppAddRepledgeComponent } from './components/Repledge/add-repledge/add-repledge.component';
import { AppRepledgeLoanSummary } from './components/Repledge/repledge-loan-summary/repledge-loan-summary.component';
import { AppReadyAuctionSummaryComponent } from './components/Ready to auction/ready-to-auction-summary/ready-to-auction-summary.component';
import { AppAllLoanReportsComponent } from './components/all-loan-reports/all-loan-reports.component';
import { AppAddInfoComponent } from './components/add-info/add-info.component';
import { AddAdminComponent } from './components/admin/add-admin/add-admin.component';
import { ViewAdminComponent } from './components/admin/view-admin/view-admin.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AccountSettingComponent,
        AppDashboardComponent,
        AppHomeComponent,
        AppAddRepledgeComponent,
        AppRepledgeLoanSummary,
        AppReadyAuctionSummaryComponent,
        AppAllLoanReportsComponent,
        AppAddInfoComponent,
        AddAdminComponent,
        ViewAdminComponent,
        AddEmployeeComponent,
        ViewEmployeeComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: []
})

export class FinanceAppSharedModule { }