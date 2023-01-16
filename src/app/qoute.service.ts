import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QouteService {
  baseURL:string="https://api.adviceslip.com/"
  constructor(private _HttpClient:HttpClient) { }
  randomeAdvice(){
    return this._HttpClient.get('https://api.adviceslip.com/advice')
  }
  adviceByID(id:number){
    return this._HttpClient.get(`${this.baseURL}advice/${id}`)
  }
}
