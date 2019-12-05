import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Day} from '../models/Day'

const Api_Url = 'https://localhost:44383'; // placeholder

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(private _http: HttpClient) { }
  
  getDays(){
    return this._http.get(`${Api_Url}/api/day`,{headers: this.getHeaders() });
  }

  createDay(day:Day){
    return this._http.post(`${Api_Url}/api/day`, day, { headers: this.getHeaders() });
  }

  getDay(id){
    return this._http.get(`${Api_Url}/apir/day/${id}`,{headers: this.getHeaders() });
  }

  updateDay(day: Day){
    return this._http.put(`${Api_Url}/api/day`, day, {headers: this.getHeaders()  });
  }

  deleteDay(id: number){
    return this._http.delete(`${Api_Url}/day/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
