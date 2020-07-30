import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { User, SuperAdmin, Employee } from '../../../../shared/models/user.model';

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
    this.loginService.getUser().subscribe(async data => {
      console.log('users received is', data);
      const users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as User;
      });


      this.loginService.getEmployee().subscribe(async data => {
        console.log('employee received is', data);
        const users = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as object)
          } as Employee;
        });
        let isEmployeeAuthenticated = false;
        console.log('users FORMAT received is', users);
        users.forEach((user) => {
          if (user.regEmailAddress === this.userEmail && user.password === this.userPassword && user.role == 'Employee') {
            isEmployeeAuthenticated = true;
            email = user.regEmailAddress;
            password = user.password;
          }
        })
        if (isEmployeeAuthenticated) {
          alert('Employee Authenticated in successfully');
          this._ROUTER.navigate(['/landing']);
        }
      });

      console.log('users FORMAT received is', users);
      let isSuperAdminAuthenticated = false;
      let isAdminAuthenticated = false;
      let email = null;
      let password = null;
      users.forEach((user) => {
        if (user.email === this.userEmail && user.password === this.userPassword && user.role == 'Super Admin') {
          isSuperAdminAuthenticated = true;
          email = user.email;
          password = user.password;
        }
        if (user.email === this.userEmail && user.password === this.userPassword && user.role == 'Admin') {
          isAdminAuthenticated = true;
          email = user.email;
          password = user.password;
        }
      });
      if (isSuperAdminAuthenticated) {
        const authStatus = await this.loginService.SignIn(email, password);
        console.log('authstatus is', authStatus);
        alert('Super Admin Authenticated in successfully');
        this._ROUTER.navigate(['/landing']);

      }
      else if (isAdminAuthenticated) {
        this._ROUTER.navigate(['/landing']);
        alert('Admin Authenticated in successfully');
      }
      else {
        console.log('empty');
        // alert('Please check your credentials');
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
