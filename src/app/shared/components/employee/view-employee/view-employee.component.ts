import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/user.model';
import { LoginService } from 'src/app/modules/login/login.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  employees: Employee[];
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {

    this.loginService.getEmployee().subscribe(async data => {
      console.log('employee received is', data);
      this.employees = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as Employee;
      });
      console.log('employe data received is', this.employees);
  
    });

  }

  deleteEmployee(employeeId: string) {
    this.loginService.deleteEmployee(employeeId);
  }

}
