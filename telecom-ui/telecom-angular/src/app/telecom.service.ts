import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelecomService {

  url = 'http://localhost:8080/telecom/home';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Home[]>{
    this.httpClient.get<Home[]>(this.url);
  }

  save(home : Home): Observable<Home> {
    this.httpClient.post<Home>(url, home);
  }
}
