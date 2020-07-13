export class User {
  id: string;
  address: string;
  dob: Date;
  email: any;
  name: Date;
  password: string;
  phoneNumber: number;
  role: string;
}

export class SuperAdmin {
  NoOfFinance: any;
  age: any;
  district: any;
  dob: any;
  email: any;
  entrepreneurName: any;
  financeName: any;
  financeNumber: any;
  financeStartDate: any;
  landmark: any;
  panCardNumber: any;
  password: any;
  phoneNumber: number;
  pincode: any;
  skypeAccount: any;
  state: any;
  streetName: any;
  role: any = 'Super Admin';
}

export class Admin {
  email: any;
  age: any;
  financeId: any;
  password: any;
  financeName: any;
  finNumber: any;
  adminName: any;
  adminNickName: any;
  allocatedAccount: any;
  financeLogo: any;
  state: any;
  district: any;
  streetName: any;
  landmark: any;
  pincode: any;
  role: any = 'Admin';
  village: any;
}
