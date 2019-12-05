import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Goal} from '../models/Goal'

const Api_Url = 'https://localhost:44361'; // placeholder

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private _http: HttpClient) { }
  
  getGoals(){
    return this._http.get(`${Api_Url}/api/goal`,{headers: this.getHeaders() });
  }

  createGoal(goal:Goal){
    return this._http.post(`${Api_Url}/api/goal`, goal, { headers: this.getHeaders() });
  }

  getGoal(id){
    return this._http.get(`${Api_Url}/api/goal/${id}`,{headers: this.getHeaders() });
  }

  updateGoal(goal: Goal){
    return this._http.put(`${Api_Url}/api/goal`, goal, {headers: this.getHeaders()  });
  }

  deleteGoal(id: number){
    return this._http.delete(`${Api_Url}/goal/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
