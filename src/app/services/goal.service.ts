import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Goal} from '../models/Goal';
import { APIURL } from 'src/environments/environment.prod';

const Api_Url = 'https://purplerain2webapi20191205112931.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private _http: HttpClient) { }
  
  getGoals(){
    return this._http.get(`${APIURL}/api/Goal`,{headers: this.getHeaders() });
  }

  createGoal(ID: any,goal:Goal){
    return this._http.post(`${APIURL}/api/Goal?dayID=${ID}`, goal, { headers: this.getHeaders() });
  }

  getGoal(id){
    return this._http.get(`${APIURL}/api/Goal/${id}`,{headers: this.getHeaders() });
  }

  updateGoal(goal: Goal){
    return this._http.put(`${APIURL}/api/Goal`, goal, {headers: this.getHeaders()  });
  }

  deleteGoal(id: number){
    return this._http.delete(`${APIURL}/Goal/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
