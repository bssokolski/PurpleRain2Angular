import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Outfit} from '../models/Outfit'

const Api_Url = 'https://purplerain2webapi20191205112931.azurewebsites.net';

@Injectable({
  providedIn: 'root'
})
export class OutfitService {

  constructor(private _http: HttpClient) { }
  
  getOutfits(){
    return this._http.get(`${Api_Url}/api/outfit`,{headers: this.getHeaders() });
  }

  createOutfit(dayId: any, outfit:Outfit){
    return this._http.post(`${Api_Url}/api/Outfit?dayId=${dayId}`, outfit, { headers: this.getHeaders() });
  }

  getOutfit(id){
    return this._http.get(`${Api_Url}/api/outfit/${id}`,{headers: this.getHeaders() });
  }

  updateOutfit(outfit: Outfit){
    return this._http.put(`${Api_Url}/api/outfit`, outfit, {headers: this.getHeaders()  });
  }

  deleteOutfit(id: number){
    return this._http.delete(`${Api_Url}/outfit/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
