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
  id: string;
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

export class Employee {
  id: string;
  finance: any;
  financeCode: any;
  dateOfJoining: any;
  empName: any;
  empNickName: any;
  mobileNumber: any;
  empDob: any;
  age: any;
  gender: any;
  addressProof: any;
  idProofNo: any;
  basicSalary: any;
  regEmailAddress: any;
  password: any;
  state: any;
  district: any;
  village: any;
  streetName: any;
  landmark: any;
  pinCode: any;
  role: any = 'Employee';
}