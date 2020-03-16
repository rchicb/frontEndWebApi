import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from '../clases/Employee';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumirService {

  // urlApi:string ='http://dummy.restapiexample.com/api/v1/employees';
  urlApi:string ='http://127.0.0.1:8000/api/employees';
  constructor(private http:HttpClient) { }

  getEmployeeList():Observable<Employee>{
    return this.http.get<Employee>(this.urlApi)
    .pipe( 
      map ((valor:Employee) =>{
        console.log(valor)
        return valor['data'];
      }))
  }

  getOtherForm(){
    return this.http.get(this.urlApi)
    .pipe(
      map( datos=>{
        return datos['data']
      })
    )
  }

  consumirWebApiLaravel(){
    return this.http.get(this.urlApi)
    .pipe(
      map(datos=>{
        return datos;
      })
    )
  }

}
