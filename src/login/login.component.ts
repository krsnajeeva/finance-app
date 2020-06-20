import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class AppLoginComponent {

    userEmail: string;
    userPassword: string;

    constructor(private _router: Router) { }

    onClickLogin() {
        if (this.userEmail === 'admin@mail.com', this.userPassword === 'admin123') {
            return this._router.navigate(['/landing']);
        } else {
            return alert('Please check your credentials');
        }
    }
}