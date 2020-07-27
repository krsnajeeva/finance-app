import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login/login.service';
import { User, Admin } from '../../../../shared/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss']
})

export class AppLandingLayoutComponent implements OnInit {
  admin = new Admin();
  adminForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.adminForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required])],
      age: [null, Validators.compose([Validators.required])],
      financeId: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      financeName: [null, Validators.compose([Validators.required])],
      finNumber: [null, Validators.compose([Validators.required])],
      adminName: [null, Validators.compose([Validators.required])],
      adminNickName: [null, Validators.compose([Validators.required])],
      allocatedAccount: [null, Validators.compose([Validators.required])],
      financeLogo: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
      district: [null, Validators.compose([Validators.required])],
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
    this.loginService.registerUser(JSON.parse(request));
    alert('Admin Account created successfully');
  }
  else{
    alert('Please enter a valid data')
  }
}

}


