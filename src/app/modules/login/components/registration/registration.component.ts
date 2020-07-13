import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { LoginService } from '../../login.service';
import { User, SuperAdmin } from '../../../../shared/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter();

  user: User;
  updateData: User;
  superAdmin = new SuperAdmin();
  superAdminForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.superAdminForm = this.formBuilder.group({
      NoOfFinance: [null],
      age: [null],
      district: [null],
      dob: [null],
      email: [null],
      entrepreneurName: [null],
      financeName: [null],
      financeNumber: [null],
      financeStartDate: [null],
      landmark: [null],
      panCardNumber: [null],
      password: [null],
      phoneNumber: [null],
      pincode: [null],
      skypeAccount: [null],
      state: [null],
      streetName: [null],
    });
    this.user = {
      id: 'id test',
      address: 'address test',
      dob: new Date(),
      email: new Date(),
      name: new Date(),
      password: 'password test',
      phoneNumber: 123,
      role: 'Super Admin'
    };
    this.updateData = {
      id: 'UPDATED',
      address: 'UPDATED',
      dob: new Date(),
      email: new Date(),
      name: new Date(),
      password: 'UPDATED',
      phoneNumber: 5555,
      role: 'Super Admin'
    };
  }

  async create(user: SuperAdmin) {
    const request = JSON.stringify(user);
    await this.loginService.registerUser(JSON.parse(request));
    await this.loginService.SignUp(JSON.parse(request).email, JSON.parse(request).password);
    this.close.emit({ action: 'Registeration window closed' });
    alert('Super Admin Account created successfully');
  }

  update(user: User) {
    this.loginService.updateUser(user);
  }

  delete(id: string) {
    this.loginService.deleteUser(id);
  }

  getUsers() {
    this.loginService.getUser().subscribe(data => {
      console.log('users received is', data);
      const users = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as User;
      });

      console.log('users FORMAT received is', users);
    });
  }

  onClose() {
    this.close.emit({ action: 'Registeration window closed' });
  }


}
