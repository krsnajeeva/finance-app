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
  modal = document.getElementById('myModal');
  btn = document.getElementById('myBtn');
  span = document.getElementsByClassName('close')[0];
  userEmail = '';
  userPassword = '';
  isModalVisible = false;
  isForgetModalVisible = false;
  forgetPasswordMail = null;

  constructor(private loginService: LoginService, private _ROUTER: Router) { }

  onClickLogin() {
   console.log('come');
   
    this.loginService.getUser().subscribe(async data => {
      console.log('users received is', data);
      const users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as User;
      });

      console.log('users FORMAT received is', users);
      let isUserAuthenticated = false;
      let email = null;
      let password = null;
      users.forEach((user) => {
        if (user.email === this.userEmail && user.password === this.userPassword) {
          isUserAuthenticated = true;
          email = user.email;
          password = user.password;
        }
      });
      if (isUserAuthenticated) {
        const authStatus = await this.loginService.SignIn(email, password);
        console.log('authstatus is', authStatus);
        // alert('Authenticated in successfully');
        this._ROUTER.navigate(['/landing']);

      } else {
        console.log('empty');
        
        alert('Please check your credentials');
      }

    });
  }

  createRegister() {
    this.isModalVisible = true;

  }

  onRegisterationClose() {
    this.isModalVisible = false;
  }

  async forgetPassword() {
    this.isForgetModalVisible = true;

  }

  closeForgetPopUp() {
    this.isForgetModalVisible = false;
  }

  async sendForgetPasswordMail(email) {
    await this.loginService.resetPasswordInit(email);
    this.isForgetModalVisible = false;
  }

}
