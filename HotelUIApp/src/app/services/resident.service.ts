import { Injectable } from '@angular/core';

import {Resident} from '../models/resident';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Md5} from 'ts-md5';
import {AuthData} from '../models/auth';
import {Employee} from '../models/employee';

@Injectable()
export class ResidentService {

  private RequestURL = 'http://localhost:8080/';
  private md5 = new Md5();
  public loggedUser: Employee;
  constructor(private http: HttpClient) {}

  getResidents(): Observable<Resident[]> {
    return this.http.get<Resident[]>(this.RequestURL + 'resident');
  }

  getReidentById(id: number): Observable<Resident> {
    return this.http.get<Resident>(this.RequestURL + `resident/${id}`);
  }
  // @ts-ignore
  postResident(resident: Resident): Observable<Object> {
    if (!resident.idResident) {
      resident.idResident = -1;
    }
    return this.http.post(this.RequestURL + 'resident', resident);
  }

  putResident(resident: Resident): Observable<Object> {
    return this.http.put(this.RequestURL + `resident/${resident.idResident}`, resident);
  }

  deleteResident(id: number): Observable<Object> {
    return this.http.delete(this.RequestURL + `resident/${id}`);
  }

  login(login: string, password: string): Observable<Employee> {
    const auth: AuthData = new AuthData();
    this.md5 = new Md5();
    auth.login = login;
    auth.password = '';
    auth.password = this.md5.appendStr(password).end().toString();
    localStorage.clear();
    localStorage.setItem('auth', JSON.stringify(auth));
    return this.http.patch<Employee>(this.RequestURL + 'login', auth);
  }

  checkIsLogin(): Observable<Employee> {
    try {
      const auth: AuthData = JSON.parse(localStorage.getItem('auth'));
      return this.http.patch<Employee>(this.RequestURL + 'login', auth);
    } catch (e) {
      return of(null);
    }
  }
}
