import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Employee } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/modules/login/login.service';
import { ConfirmPasswordValidator } from './confirm-password-validator';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employee = new Employee();
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      finance: [null, Validators.compose([Validators.required])],
      financeCode: [null, Validators.compose([Validators.required])],
      dateOfJoining: [null, Validators.compose([Validators.required])],
      empName: [null, Validators.compose([Validators.required])],
      empNickName: [null, Validators.compose([Validators.required])],
      mobileNumber: [null, Validators.compose([Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
      empDob: [null, Validators.compose([Validators.required])],
      age: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.compose([Validators.required])],
      addressProof: [null, Validators.compose([Validators.required])],
      idProofNo: [null, Validators.compose([Validators.required])],
      basicSalary: [null, Validators.compose([Validators.required])],
      regEmailAddress: [null, Validators.compose([Validators.required,Validators.pattern('^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\\.([a-zA-Z]{2,5})$')])],
      password: [null, Validators.compose([Validators.required])],
      confirmPassword: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
      district: [null, Validators.compose([Validators.required])],
      village: [null, Validators.compose([Validators.required])],
      streetName: [null, Validators.compose([Validators.required])],
      landmark: [null, Validators.compose([Validators.required])],
      pinCode: [null, Validators.compose([Validators.required])],
    },{
    validator: ConfirmPasswordValidator('password', 'confirmPassword')
    }
    );
  }
 
  createEmployee(employee: Employee) {

    // alert(JSON.stringify(employee));
    if (this.employeeForm.valid) {
      const request = JSON.stringify(employee);
      console.log('JSON.parse(request) is', JSON.parse(request));
      this.loginService.registerEmployee(JSON.parse(request));
      alert('Employee Created Successfully');
    }
    else {
      alert('Please enter a valid data')
    }
  }

}
