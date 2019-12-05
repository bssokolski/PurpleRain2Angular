import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Day} from '../models/Day'

const Api_Url = 'https://purplerain2webapi20191205112931.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(private _http: HttpClient) { }
  
  getDays(){
    return this._http.get(`${Api_Url}/api/Day`,{headers: this.getHeaders() });
  }

  createDay(day:Day){
    return this._http.post(`${Api_Url}/api/Day`, day, { headers: this.getHeaders() });
  }

  getDay(id){
    return this._http.get(`${Api_Url}/api/Day/${id}`,{headers: this.getHeaders() });
  }

  updateDay(day: Day){
    return this._http.put(`${Api_Url}/api/Day`, day, {headers: this.getHeaders()  });
  }

  deleteDay(id: number){
    return this._http.delete(`${Api_Url}/api/Day/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
