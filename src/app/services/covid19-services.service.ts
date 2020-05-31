import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(
    private http: HttpClient,
  ) { }
  //https://corona.lmao.ninja/v2/all

  apiUrl = 'https://corona.lmao.ninja/v2';
  apiKey = '';

  getSummaryData ()
  {
    return this.http.get(`${this.apiUrl}/all`);
  }
  getCountyData()
  {
    return this.http.get(`${this.apiUrl}/countries`)

  }
}
