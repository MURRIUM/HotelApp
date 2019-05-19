import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Category} from '../models/category';

@Injectable()
export class CategoryService {

  private RequestURL = 'http://localhost:8080/category';
  constructor(private http: HttpClient) {}

  get(): Observable<Category[]> {
    return this.http.get<Category[]>(this.RequestURL);
  }

  getById(id: number): Observable<Category> {
    return this.http.get<Category>(this.RequestURL + `/${id}`);
  }
  // @ts-ignore
  post(item: Category): Observable<Object> {
    if (!item.idCategory) {
      item.idCategory = -1;
    }
    return this.http.post(this.RequestURL, item);
  }

  put(item: Category): Observable<Object> {
    return this.http.put(this.RequestURL + `/${item.idCategory}`, item);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.RequestURL + `/${id}`);
  }
}
