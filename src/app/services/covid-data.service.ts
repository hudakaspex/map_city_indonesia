import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {
  countryData = this.http.get<any>('./assets/countries.geo.json');


  constructor(
    private http: HttpClient
  ) { }

  loadAllCountryData(): Observable<any> {
    return forkJoin([this.countryData, this.getUpdatedCovidData()]);
  }

  getUpdatedCovidData(): Observable<any> {
    return this.http.get<any>('https://api.thevirustracker.com/free-api?countryTotals=ALL');
  }
}
