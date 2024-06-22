import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyApiService {
  url="https://open.er-api.com/v6/latest/USD"
  constructor(private http:HttpClient) { }
  currencyValues(){
    return this.http.get(this.url)
  }
}
