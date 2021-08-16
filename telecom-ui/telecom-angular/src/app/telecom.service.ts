import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Account from './models/Account';
import Phone from './models/Phone';

@Injectable({
  providedIn: 'root'
})
export class TelecomService {

  phone_url = 'http://localhost:9001/phones/phone';
  account_url = 'http://localhost:9001/accounts/account';



  constructor(private httpClient: HttpClient) { }

  findAllPhone(): Observable<Phone[]>{
    return this.httpClient.get<Phone[]>(this.phone_url);
  }

  savePhone(phone : Phone): Observable<Phone> {
    return this.httpClient.post<Phone>(this.phone_url, phone);
  }

  saveAccount(account : Account): Observable<Account> {
    return this.httpClient.post<Account>(this.account_url, account);
  }


}
