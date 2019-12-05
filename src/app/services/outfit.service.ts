import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Outfit} from '../models/Outfit';
import { APIURL } from 'src/environments/environment.prod';

const Api_Url = 'https://purplerain2webapi20191205112931.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class OutfitService {

  constructor(private _http: HttpClient) { }
  
  getOutfits(){
    return this._http.get(`${APIURL}/api/outfit`,{headers: this.getHeaders() });
  }

  createOutfit(dayId: any, outfit:Outfit){
    return this._http.post(`${APIURL}/api/Outfit?dayId=${dayId}`, outfit, { headers: this.getHeaders() });
  }

  getOutfit(id){
    return this._http.get(`${APIURL}/api/outfit/${id}`,{headers: this.getHeaders() });
  }

  updateOutfit(outfit: Outfit){
    return this._http.put(`${APIURL}/api/outfit`, outfit, {headers: this.getHeaders()  });
  }

  deleteOutfit(id: number){
    return this._http.delete(`${APIURL}/outfit/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
