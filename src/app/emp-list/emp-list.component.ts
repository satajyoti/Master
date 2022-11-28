import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {

  empList:any=[]
   constructor(private empService:EmployeeService){

   }

   ngOnInit(){
    this.empService.getEmployee().subscribe(res=>{
      console.log(res);
      this.empList=res;
    })
   }
}
