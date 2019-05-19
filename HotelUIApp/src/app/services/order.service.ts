import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Order} from '../models/order';

@Injectable()
export class OrderService {

  private RequestURL = 'http://localhost:8080/order';
  constructor(private http: HttpClient) {}

  get(): Observable<Order[]> {
    return this.http.get<Order[]>(this.RequestURL);
  }

  getById(id: number): Observable<Order> {
    return this.http.get<Order>(this.RequestURL + `/${id}`);
  }
  // @ts-ignore
  post(item: Order): Observable<Object> {
    if (!item.idOrder) {
      item.idOrder = -1;
    }
    return this.http.post(this.RequestURL, item);
  }

  put(item: Order): Observable<Object> {
    return this.http.put(this.RequestURL + `/${item.idOrder}`, item);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.RequestURL + `/${id}`);
  }
}
