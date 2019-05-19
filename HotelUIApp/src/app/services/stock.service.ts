import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Stock} from '../models/stock';

@Injectable()
export class StockService {

  private RequestURL = 'http://localhost:8080/stock';
  constructor(private http: HttpClient) {}

  get(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.RequestURL);
  }

  getById(id: number): Observable<Stock> {
    return this.http.get<Stock>(this.RequestURL + `/${id}`);
  }
  // @ts-ignore
  post(item: Stock): Observable<Object> {
    if (!item.idStock) {
      item.idStock = -1;
    }
    return this.http.post(this.RequestURL, item);
  }

  put(item: Stock): Observable<Object> {
    return this.http.put(this.RequestURL + `/${item.idStock}`, item);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.RequestURL + `/${id}`);
  }
}
