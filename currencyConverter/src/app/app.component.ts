import { Component } from '@angular/core';
import { CurrencyApiService } from './currency-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'currencyConverter';
  currencyAmount1:number=1;
  currencyAmount2:number=1;
  currencyList:any;
  currencies:any;
  constructor(private currencyValue:CurrencyApiService){
    currencyValue.currencyValues().subscribe((data)=>{
      this.currencyList=data;
      this.currencies=Object.keys(this.currencyList.rates)
    })
  }
  getamount(amount1:any,currency1:string,currency2:string){
    this.currencyAmount2=amount1/this.currencyList.rates[currency1]*this.currencyList.rates[currency2]
  }
}
