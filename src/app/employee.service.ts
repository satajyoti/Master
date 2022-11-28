import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl:string=environment.apiURL;

  constructor(private http:HttpClient) { 

  }
  createEmployee(empPayLoad:any):Observable<any>{
    return this.http.post(this.apiUrl+"/api/Employee",empPayLoad)
  }
  getEmployee():Observable<any>{
   return this.http.get(this.apiUrl+"/api/Employee");
  }
}
