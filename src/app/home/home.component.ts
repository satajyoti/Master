import { Component } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isSuccess:boolean=false
  constructor(private empService:EmployeeService,private router:Router){

  }

  employeeForm:FormGroup=new FormGroup({
     firstName:new  FormControl(),
     lastName:new FormControl(),
     tel:new FormControl(),
     email:new FormControl()

  })

  onSubmit(empForm:FormGroup){
    this.empService.createEmployee(empForm.value).subscribe(res=>{
       this.isSuccess=true;
       this.router.navigateByUrl("List")
    })
  }

}
