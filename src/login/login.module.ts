import { NgModule } from '@angular/core';
import { AppLoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoginRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [
        AppLoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppLoginRoutingModule
    ],
    exports: [
        AppLoginComponent
    ]
})

export class AppLoginModule { }