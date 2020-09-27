import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //to work with http requests
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {
    //dependency injection
  }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }
}
