import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from './login.component';

const routes: Routes = [
    { path: '', component: AppLoginComponent }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: []
})

export class AppLoginRoutingModule { }