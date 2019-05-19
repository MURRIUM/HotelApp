import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RoomsServices} from '../models/roomsServices';

@Injectable()
export class RoomServiceService {

  private RequestURL = 'http://localhost:8080/roomServices';
  constructor(private http: HttpClient) {}

  get(): Observable<RoomsServices[]> {
    return this.http.get<RoomsServices[]>(this.RequestURL);
  }

  getById(id: number): Observable<RoomsServices> {
    return this.http.get<RoomsServices>(this.RequestURL + `/${id}`);
  }
  // @ts-ignore
  post(item: RoomsServices): Observable<Object> {
    if (!item.idService) {
      item.idService = -1;
    }
    return this.http.post(this.RequestURL, item);
  }

  put(item: RoomsServices): Observable<Object> {
    return this.http.put(this.RequestURL + `/${item.idService}`, item);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.RequestURL + `/${id}`);
  }
}
