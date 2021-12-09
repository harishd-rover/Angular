import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IEmployee } from "./Employee";
import {HttpClient,HttpErrorResponse} from '@angular/common/http';


@Injectable({
    providedIn:'root'
})

export class EmployeeService{
    // baseUrl:string = "",
    // here we place api request urls
    private url:string = "./assets/Data/Employees.json"

    
    constructor(private http:HttpClient){}

    getEmployees():Observable<IEmployee[]>
    {
        return this.http.get<IEmployee[]>(this.url);
    }
//    errorHandler(error: HttpErrorResponse){
//        return Observable.throw(error.message || "Server Error")
       
//    }
}   