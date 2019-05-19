import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Employee} from '../models/employee';

@Injectable()
export class EmployeeService {

  private RequestURL = 'http://localhost:8080/employee';
  constructor(private http: HttpClient) {}

  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.RequestURL);
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.RequestURL + `/${id}`);
  }
  // @ts-ignore
  post(item: Employee): Observable<Object> {
    if (!item.idEmployee) {
      item.idEmployee = -1;
    }
    return this.http.post(this.RequestURL, item);
  }

  put(item: Employee): Observable<Object> {
    return this.http.put(this.RequestURL + `/${item.idEmployee}`, item);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.RequestURL + `/${id}`);
  }
}
