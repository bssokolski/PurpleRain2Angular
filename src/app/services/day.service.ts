import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Day} from '../models/Day';
import { APIURL } from 'src/environments/environment.prod';

const Api_Url = 'https://purplerain2webapi20191205112931.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(private _http: HttpClient) { }
  
  getDays(){
    return this._http.get(`${APIURL}/api/Day`,{headers: this.getHeaders() });
  }

  createDay(day:Day){
    return this._http.post(`${APIURL}/api/Day`, day, { headers: this.getHeaders() });
  }

  getDay(id){
    return this._http.get(`${APIURL}/api/Day/${id}`,{headers: this.getHeaders() });
  }

  updateDay(day: Day){
    return this._http.put(`${APIURL}/api/Day`, day, {headers: this.getHeaders()  });
  }

  deleteDay(id: number){
    return this._http.delete(`${APIURL}/api/Day/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
