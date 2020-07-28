import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/shared/models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/modules/login/login.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  admin = new Admin();
  adminForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required])],
      // age: [null, Validators.compose([Validators.required])],
      financeId: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      financeName: [null, Validators.compose([Validators.required])],
      finNumber: [null, Validators.compose([Validators.required])],
      adminName: [null, Validators.compose([Validators.required])],
      adminNickName: [null, Validators.compose([Validators.required])],
      allocatedAccount: [null, Validators.compose([Validators.required])],
      // financeLogo: [null, Validators.compose([Validators.required])],
      // state: [null, Validators.compose([Validators.required])],
      // district: [null, Validators.compose([Validators.required])],
      streetName: [null, Validators.compose([Validators.required])],
      landmark: [null, Validators.compose([Validators.required])],
      pincode: [null, Validators.compose([Validators.required])],
      village: [null, Validators.compose([Validators.required])],
    });
  }

  createAdmin(user: Admin) {
    if(this.adminForm.valid){
    const request = JSON.stringify(user);
    console.log('JSON.parse(request) is', JSON.parse(request));
    // alert(JSON.stringify(user))
    this.loginService.registerUser(JSON.parse(request));
    alert('Admin Account created successfully');
  }
  else{
    alert('Please enter a valid data')
  }
}
}
