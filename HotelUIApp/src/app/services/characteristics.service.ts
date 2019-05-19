import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Characteristic} from '../models/characteristic';

@Injectable()
export class CharacteristicsService {

  private RequestURL = 'http://localhost:8080/characteristics';
  constructor(private http: HttpClient) {}

  get(): Observable<Characteristic[]> {
    return this.http.get<Characteristic[]>(this.RequestURL);
  }

  getById(id: number): Observable<Characteristic> {
    return this.http.get<Characteristic>(this.RequestURL + `/${id}`);
  }
  // @ts-ignore
  post(item: Characteristic): Observable<Object> {
    if (!item.idCharacteristic) {
      item.idCharacteristic = -1;
    }
    return this.http.post(this.RequestURL, item);
  }

  put(item: Characteristic): Observable<Object> {
    return this.http.put(this.RequestURL + `/${item.idCharacteristic}`, item);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.RequestURL + `/${id}`);
  }
}
