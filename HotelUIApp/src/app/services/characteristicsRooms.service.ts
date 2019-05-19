import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CharacteristicsRooms} from '../models/characteristicsRooms';

@Injectable()
export class CharacteristicsRoomsService {

  private RequestURL = 'http://localhost:8080/characteristicsRooms';
  constructor(private http: HttpClient) {}

  get(): Observable<CharacteristicsRooms[]> {
    return this.http.get<CharacteristicsRooms[]>(this.RequestURL);
  }

  getById(id: number, room: number): Observable<CharacteristicsRooms> {
    return this.http.get<CharacteristicsRooms>(this.RequestURL + `/${room}` + `/${id}`);
  }
  // @ts-ignore
  post(item: CharacteristicsRooms): Observable<Object> {
    return this.http.post(this.RequestURL, item);
  }

  delete(item: CharacteristicsRooms): Observable<Object> {
    return this.http.delete(this.RequestURL + `/${item.room}` + `/${item.idCharacteristic}`);
  }
}
