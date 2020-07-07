import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { User, SuperAdmin } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AppLoginComponent {

  userEmail = '';
  userPassword = '';

  constructor(private loginService: LoginService, private _ROUTER: Router) { }

  onClickLogin() {
    this.loginService.getUser().subscribe(data => {
      console.log('users received is', data);
      const users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as User;
      });

      console.log('users FORMAT received is', users);
      let isUserAuthenticated = false;
      users.forEach((user) => {
        if (user.email === this.userEmail && user.password === this.userPassword) {
          isUserAuthenticated = true;

        }
      });
      if (isUserAuthenticated) {
        this._ROUTER.navigate(['/landing']);
      } else {
        alert('Please check your credentials');
      }

    });
  }

  createRegister() {
    this._ROUTER.navigate(['/register']);
  }
}
