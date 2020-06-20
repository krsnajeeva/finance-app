import { NgModule } from "@angular/core";
import { AppLandingLayoutComponent } from './landing-layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLandingRoutingModule } from './landing-routing.module';

@NgModule({
    declarations: [
        AppLandingLayoutComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppLandingRoutingModule
    ],
    exports: [
        AppLandingLayoutComponent
    ]
})
export class AppLandingModule { }