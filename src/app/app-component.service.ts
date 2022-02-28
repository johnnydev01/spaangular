import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from './app-config';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  TS = '1589651945';
  API_KEY =  'caae684840600b730c185b0835eefa26';
  HASH = 'b10757f591ca6001131641ab844d5d87';
  PARAMS = `?ts=${this.TS}&apikey=${this.API_KEY}&hash=${this.HASH}`;

  baseUrl  = this.config.getBaseUrl();

  constructor(
    private config: Config,
    private http: HttpClient
  ) { }


  getAllCharacters(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/characters${this.PARAMS}&limit=7` );
  }


}
