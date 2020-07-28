import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/login/login.service';
import { User, Admin } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.scss']
})
export class ViewAdminComponent implements OnInit {
  admin: Admin[];
  isModalVisible = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getUser().subscribe(async data => {
      // console.log('users received is', data);
      this.admin = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Admin;
      });

      console.log('users FORMAT received is', this.admin);
    });

    // this.loginService.getUser().subscribe(async data => {
    //   // console.log('employee received is', data);
    //   // this.admin
    //   const edata = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       ...(e.payload.doc.data() as object)
    //     } as User;
    //   });
    //   console.log('admin data received is', this.admin);
     
    // });
  }

  editAdmin() {
    this.isModalVisible = true;
  }

  editAdminClose() {
    this.isModalVisible = false;
  }
  
  deleteAdmin(adminId: string) {
    this.loginService.deleteUser(adminId);
  }

}
