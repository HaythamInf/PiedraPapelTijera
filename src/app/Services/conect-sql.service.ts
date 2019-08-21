import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Moves } from '../Class/moves';
import { HistoricalScore } from '../Class/historicalScore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ConectSQLService {
  GetMovesUrl:string;
  GetScoreUrl:string; 
  

  constructor(private _http: HttpClient) 
  { 
    this.GetMovesUrl = 'http://localhost:51672/api/GetMoves';
    this.GetScoreUrl = 'http://localhost:51672/api/GetScore';
    
  }
  // getMoveSet(){
  //   return this._http.get<Moves[]>(this.GetMovesUrl,{header:string})
  // }
  
  getMoveSet(): Observable<any>{
    //const  params = new  HttpParams().set('_page', "1").set('_limit', "1");
    //const  headers = new  HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE");
    const  headers = new  HttpHeaders().set("Content-Type", "application/json; charset=utf-8");

    return this._http.get(this.GetMovesUrl,{headers});
  }

  getScore(){
    return this._http.get<HistoricalScore[]>(this.GetScoreUrl)
  }

}




 
