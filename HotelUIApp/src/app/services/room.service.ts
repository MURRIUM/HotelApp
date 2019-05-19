import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Category} from '../models/category';
import {Room} from '../models/room';

@Injectable()
export class RoomService {

  private RequestURL = 'http://localhost:8080/rooms';
  constructor(private http: HttpClient) {}

  get(): Observable<Room[]> {
    return this.http.get<Room[]>(this.RequestURL);
  }

  getById(id: number): Observable<Room> {
    return this.http.get<Room>(this.RequestURL + `/${id}`);
  }
  // @ts-ignore
  post(item: Room): Observable<Object> {
    if (!item.room) {
      item.room = -1;
    }
    return this.http.post(this.RequestURL, item);
  }

  put(item: Room): Observable<Object> {
    return this.http.put(this.RequestURL + `/${item.room}`, item);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.RequestURL + `/${id}`);
  }
}
