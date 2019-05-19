import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Service} from '../models/service';

@Injectable()
export class ServiceService {

  private RequestURL = 'http://localhost:8080/services';
  constructor(private http: HttpClient) {}

  get(): Observable<Service[]> {
    return this.http.get<Service[]>(this.RequestURL);
  }

  getById(id: number): Observable<Service> {
    return this.http.get<Service>(this.RequestURL + `/${id}`);
  }
  // @ts-ignore
  post(item: Service): Observable<Object> {
    if (!item.idService) {
      item.idService = -1;
    }
    return this.http.post(this.RequestURL, item);
  }

  put(item: Service): Observable<Object> {
    return this.http.put(this.RequestURL + `/${item.idService}`, item);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.RequestURL + `/${id}`);
  }
}
