import { NgModule } from '@angular/core';
import { AppLandingLayoutComponent } from '../landing/components/landing/landing-layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLandingRoutingModule } from './landing-routing.module';
import { FinanceAppSharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
    declarations: [
        AppLandingLayoutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppLandingRoutingModule,
        FinanceAppSharedModule
    ],
    exports: [
        AppLandingLayoutComponent
    ]
})
export class AppLandingModule { }
