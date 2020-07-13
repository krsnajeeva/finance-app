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
      email: [null],
      age: [null],
      financeId: [null],
      password: [null],
      financeName: [null],
      finNumber: [null],
      adminName: [null],
      adminNickName: [null],
      allocatedAccount: [null],
      financeLogo: [null],
      state: [null],
      district: [null],
      streetName: [null],
      landmark: [null],
      pincode: [null],
      village: [null]

    });
  }

  createAdmin(user: Admin) {
    const request = JSON.stringify(user);
    console.log('JSON.parse(request) is', JSON.parse(request));
    this.loginService.registerUser(JSON.parse(request));
    alert('Admin Account created successfully');
  }
}


