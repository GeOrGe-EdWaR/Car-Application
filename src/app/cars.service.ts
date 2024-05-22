import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private _HttpClient: HttpClient) {}
  GetData(): Observable<any> {
    return this._HttpClient.get('https://freetestapi.com/api/v1/cars?limit=3');
  }
  GetSingleItem(id: number): Observable<any> {
    return this._HttpClient.get(`https://freetestapi.com/api/v1/cars/1${id}`);
  }
  GetAllData(): Observable<any> {
    return this._HttpClient.get('https://freetestapi.com/api/v1/cars');
  }
}
